const mongoose = require("mongoose");
const CompanyService = require("../../services/company");
const UserService = require("../../services/user");
const { generateRandomString } = require("../../utils/common");
const { handleResponse, handleError } = require("../../utils/responses");
const { finishes } = require("../../seeders/finishesSeeder");
const { hardwares } = require("../../seeders/hardwaresSeeder");
const {
  hardwareCategories,
} = require("../../seeders/hardwareCategoriesSeeder");
const { layouts } = require("../../seeders/layoutsSeeder");
const { glassTypes } = require("../../seeders/glassTypeSeeder");
const { glassTreatments } = require("../../seeders/glassTreatmentSeeder");

const FinishService = require("../../services/finish");
const HardwareService = require("../../services/hardware");
const HardwareCategoryService = require("../../services/hardwareCategory");
const LayoutService = require("../../services/layout");
const GlassTypeService = require("../../services/glassType");
const GlassTreatmentService = require("../../services/glassTreatment");
exports.getAll = async (req, res) => {
  UserService.findAll()
    .then((users) => {
      handleResponse(res, 200, "All Users", users);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getUser = async (req, res) => {};
exports.saveUser = async (req, res) => {
  const password = generateRandomString(8);
  const data = { ...req.body, password: password };

  try {
    const hardwareCat = await HardwareCategoryService.findAll();
    if (hardwareCat?.length <= 0) {
      await Promise.all(
        hardwareCategories?.map(async (cat) => {
          await HardwareCategoryService.create({ ...cat });
        })
      );
    }
    const user = await UserService.create(data); // create user
    const company = await CompanyService.create({ user_id: user?.id }); // create user company
    await Promise.all(
      finishes?.map(async (finish) => {
        await FinishService.create({ ...finish, company_id: company?.id }); // create company finishes
      })
    );
    const userFinishes = await FinishService.findAll({
      company_id: company?.id,
    }); // get all finishes

    const hardwareFinishes = await generateFinishes(userFinishes);
    hardwares?.map(async (hardware) => {
      // create user hardwares
      await HardwareService.create({
        ...hardware,
        company_id: company?.id,
        finishes: hardwareFinishes,
      });
    });
    glassTypes?.map(async (glassType) => {
      // create user glass types
      await GlassTypeService.create({ ...glassType, company_id: company?.id });
    });
    glassTreatments?.map(async (glassTreatment) => {
      // create user glass treatments
      await GlassTreatmentService.create({
        ...glassTreatment,
        company_id: company?.id,
      });
    });
    const layoutsSetttings = await seedLayouts(layouts, company?.id); // create user layouts
    handleResponse(res, 200, "User succefully created", layoutsSetttings);
  } catch (error) {
    console.log(error);
    handleError(res, error);
  }
};
const seedLayouts = (layouts, company_id) => {
  return new Promise((resolve, reject) => {
    try {
      const result = [];
      layouts?.map(async (layout) => {
        const settings = await generateLayoutSettings(
          layout?.settings,
          company_id
        );
        result.push(
          await LayoutService.create({
            name: layout?.name,
            image: layout?.image,
            company_id: new mongoose.Types.ObjectId(company_id),
            settings: {...settings},
          })
        );
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
const generateLayoutSettings = (settings, companyId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = {};
      if (settings?.hardwareFinishes) {
        // finishes
        const finish = await FinishService.findBy({
          slug: settings?.hardwareFinishes,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          hardwareFinishes: finish._id,
        };
      }
      if (settings?.handles && settings?.handles?.handleType) {
        // handles
        const handle = await HardwareService.findBy({
          slug: settings?.handles?.handleType,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          handles: {
            handleType: new mongoose.Types.ObjectId(handle.id),
            count: settings?.handles?.count,
          },
        };
      }
      if (settings?.hinges && settings?.hinges?.hingesType) {
        // hinges
        const hinge = await HardwareService.findBy({
          slug: settings?.hinges?.hingesType,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          hinges: {
            hingesType: new mongoose.Types.ObjectId(hinge?.id),
            count: settings?.hinges?.count,
          },
        };
      }
      if (
        settings?.pivotHingeOption &&
        settings?.pivotHingeOption?.pivotHingeType
      ) {
        // pivotHingeOption
        const pivotHinge = await HardwareService.findBy({
          slug: settings?.pivotHingeOption?.pivotHingeType,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          pivotHingeOption: {
            pivotHingeType: new mongoose.Types.ObjectId(pivotHinge?.id),
            count: settings?.pivotHingeOption?.count,
          },
        };
      }
      if (
        settings?.heavyDutyOption &&
        settings?.heavyDutyOption?.heavyDutyType
      ) {
        // heavyDutyOption
        const heavyDutyType = await HardwareService.findBy({
          slug: settings?.heavyDutyOption?.heavyDutyType,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          heavyDutyOption: {
            heavyDutyType: new mongoose.Types.ObjectId(heavyDutyType?.id),
            threshold: settings?.heavyDutyOption?.threshold,
            height: settings?.heavyDutyOption?.height,
          },
        };
      }
      if (
        settings?.heavyPivotOption &&
        settings?.heavyPivotOption?.heavyPivotType
      ) {
        // heavyPivotOption
        const heavyPivotType = await HardwareService.findBy({
          slug: settings?.heavyPivotOption?.heavyPivotType,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          heavyPivotOption: {
            heavyPivotType: new mongoose.Types.ObjectId(heavyPivotType?.id),
            threshold: settings?.heavyPivotOption?.threshold,
            height: settings?.heavyPivotOption?.height,
          },
        };
      }
      if (settings?.channelOrClamps) {
        // channelOrClamps
        result = { ...result, channelOrClamps: settings?.channelOrClamps };
      }
      if (settings?.mountingChannel) {
        // mountingChannel
        const mountingChannel = await HardwareService.findBy({
          slug: settings?.mountingChannel,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          mountingChannel: new mongoose.Types.ObjectId(mountingChannel?.id),
        };
      }
      if (settings?.wallClamp && settings?.wallClamp?.wallClampType) {
        // wallClamp
        const wallClampType = await HardwareService.findBy({
          slug: settings?.wallClamp?.wallClampType,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          wallClamp: {
            wallClampType: new mongoose.Types.ObjectId(wallClampType?.id),
            count: settings?.wallClamp?.count,
          },
        };
      }
      if (settings?.sleeveOver && settings?.sleeveOver?.sleeveOverType) {
        // sleeveOver
        const sleeveOverType = await HardwareService.findBy({
          slug: settings?.sleeveOver?.sleeveOverType,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          sleeveOver: {
            sleeveOverType: new mongoose.Types.ObjectId(sleeveOverType?.id),
            count: settings?.sleeveOver?.count,
          },
        };
      }
      if (settings?.glassToGlass && settings?.glassToGlass?.glassToGlassType) {
        // glassToGlass
        const glassToGlassType = await HardwareService.findBy({
          slug: settings?.glassToGlass?.glassToGlassType,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          glassToGlass: {
            glassToGlassType: new mongoose.Types.ObjectId(glassToGlassType?.id),
            count: settings?.glassToGlass?.count,
          },
        };
      }
      if (settings?.glassType && settings?.glassType?.type) {
        // glassType
        const glassType = await GlassTypeService.findBy({
          slug: settings?.glassType?.type,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          glassType: {
            type: new mongoose.Types.ObjectId(glassType?.id),
            thickness: settings?.glassType?.thickness,
          },
        };
      }
      if (settings?.slidingDoorSystem && settings?.slidingDoorSystem?.type) {
        // slidingDoorSystem
        const slidingDoorSystem = await HardwareService.findBy({
          slug: settings?.slidingDoorSystem?.type,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          slidingDoorSystem: {
            type: new mongoose.Types.ObjectId(slidingDoorSystem?.id),
            count: settings?.slidingDoorSystem?.count,
          },
        };
      }
      if (settings?.outages) {
        // outages
        result = { ...result, outages: settings?.outages };
      }
      if (settings?.transom) {
        // transom
        const transom = await HardwareService.findBy({
          slug: settings?.transom,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          transom: new mongoose.Types.ObjectId(transom?.id),
        };
      }
      if (settings?.header) {
        // header
        const header = await HardwareService.findBy({
          slug: settings?.header,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          header: new mongoose.Types.ObjectId(header?.id),
        };
      }
      if (settings?.glassTreatment) {
        // glassTreatment
        const glassTreatment = await GlassTreatmentService.findBy({
          slug: settings?.glassTreatment,
          company_id: new mongoose.Types.ObjectId(companyId),
        });
        result = {
          ...result,
          glassTreatment: new mongoose.Types.ObjectId(glassTreatment?.id),
        };
      }
      if (settings?.other) {
        // other
        result = {
          ...result,
          other: {
            people: settings?.other?.people,
            hours: settings?.other?.hours,
          },
        };
      }
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
const generateFinishes = (finish) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hardwareFinishes = await finish?.flatMap((finish) => [
        // generate double record of every finish of user
        {
          name: finish?.name,
          slug: finish?.slug,
          image: finish?.image,
          partNumber: finish?.partNumber,
          holesNeeded: finish?.holesNeeded,
          cost: finish?.cost,
          thickness: "1/2",
          status: "false",
          finish_id: finish?.id,
        },
        {
          name: finish?.name,
          slug: finish?.slug,
          image: finish?.image,
          partNumber: finish?.partNumber,
          holesNeeded: finish?.holesNeeded,
          cost: finish?.cost,
          thickness: "3/8",
          status: "false",
          finish_id: finish?.id,
        },
      ]);
      resolve(hardwareFinishes);
    } catch (error) {
      reject(error);
    }
  });
};
