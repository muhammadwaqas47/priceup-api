const FinishService = require("../../services/finish");
const GlassTreatmentService = require("../../services/glassTreatment");
const GlassTypeService = require("../../services/glassType");
const HardwareService = require("../../services/hardware");
const LayoutService = require("../../services/layout");
const { nestedObjectsToDotNotation } = require("../../utils/common");
const { handleResponse, handleError } = require("../../utils/responses");

exports.getAll = async (req, res) => {
  const company_id = req.company_id;
  LayoutService.findAll({ company_id: company_id })
    .then((layouts) => {
      handleResponse(res, 200, "All Layouts", layouts);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getLayout = async (req, res) => {
  const { id } = req.params;
  LayoutService.findBy({ _id: id })
    .then(async (layout) => {
      const company_id = req.company_id;
      const finishes = await FinishService.findAll({ company_id: company_id });
      const handles = await HardwareService.findAllBy({
        hardware_category_slug: "handles",
        company_id: company_id,
      });
      const hinges = await HardwareService.findAllBy({
        hardware_category_slug: "hinges",
        company_id: company_id,
      });
      const mountingChannel = await HardwareService.findAllBy({
        hardware_category_slug: "mounting-channels",
        company_id: company_id,
      });

      const mountingClamps = await HardwareService.findAllBy({
        hardware_category_slug: "mounting-clamps",
        company_id: company_id,
      });

      const slidingDoorSystem = await HardwareService.findAllBy({
        hardware_category_slug: "sliding-door-system",
        company_id: company_id,
      });
      const transom = await HardwareService.findAllBy({
        hardware_category_slug: "transom",
        company_id: company_id,
      });
      const header = await HardwareService.findAllBy({
        hardware_category_slug: "header",
        company_id: company_id,
      });
      const glassType = await GlassTypeService.findAll({
        company_id: company_id,
      });
      const glassTreatment = await GlassTreatmentService.findAll({
        company_id: company_id,
      });

      const listData = {
        hardwareFinishes: finishes,
        handles: handles,
        hinges: hinges,
        pivotHingeOption: hinges,
        heavyDutyOption: hinges,
        heavyPivotOption: hinges,
        channelOrClamps: ["Channel", "Clamps"],
        mountingChannel: mountingChannel,
        wallClamp: mountingClamps,
        sleeveOver: mountingClamps,
        glassToGlass: mountingClamps,
        glassType: glassType,
        slidingDoorSystem: slidingDoorSystem,
        transom: transom,
        header: header,
        glassTreatment: glassTreatment,
      };
      handleResponse(res, 200, "Success", {
        layoutData: layout,
        listData: listData,
      });
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.updateLayout = async (req, res) => {
  const { id } = req.params;
  const payload = { ...req.body };
  const data = await nestedObjectsToDotNotation(payload);
  LayoutService.update({ _id: id }, data)
    .then((layout) => {
      handleResponse(res, 200, "Layout updated successfully", layout);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.deleteLayout = async (req, res) => {
  const { id } = req.params;
  LayoutService.delete({ _id: id })
    .then((layout) => {
      handleResponse(res, 200, "Layout deleted successfully", layout);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.saveLayout = async (req, res) => {
  const data = { ...req.body };
  LayoutService.create(data)
    .then((layout) => {
      handleResponse(res, 200, "Layout created successfully", layout);
    })
    .catch((err) => {
      handleError(res, err);
    });
};
