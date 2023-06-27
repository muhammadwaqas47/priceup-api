const FinishService = require("../../services/finish");
const HardwareService = require("../../services/hardware");
const { nestedObjectsToDotNotation } = require("../../utils/common");
const { handleResponse, handleError } = require("../../utils/responses");
const { generateFinishes } = require("../user");

exports.getAll = async (req, res) => {
  const company_id = req.company_id;
  HardwareService.findAll({ company_id: company_id })
    .then((hardwares) => {
      handleResponse(res, 200, "All Hardwares", hardwares);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getHardware = async (req, res) => {
  const { id } = req.params;
  HardwareService.findBy({ _id: id })
    .then((hardware) => {
      handleResponse(res, 200, "Success", hardware);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.updateHardware = async (req, res) => {
  const { id } = req.params;
  const data = { ...req.body };
  const updatedData = nestedObjectsToDotNotation(data);
  HardwareService.update({ _id: id }, updatedData)
    .then((hardware) => {
      handleResponse(res, 200, "Hardware updated successfully", hardware);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.deleteHardwareFinishes = async (req, res) => {
  const { id, finishItemId } = req.params;
  HardwareService.update(
    { _id: id },
    { $pull: { finishes: { _id: finishItemId } } }
  )
    .then((hardware) => {
      handleResponse(
        res,
        200,
        "Hardware Finishes removed successfully",
        hardware
      );
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.addHardwareFinishes = async (req, res) => {
  const { id } = req.params;
  const data = { ...req.body };
  HardwareService.update({ _id: id }, { $push: { finishes: data } })
    .then((hardware) => {
      handleResponse(
        res,
        200,
        "Hardware Finishes added successfully",
        hardware
      );
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.deleteHardware = async (req, res) => {
  const { id } = req.params;
  HardwareService.delete({ _id: id })
    .then((hardware) => {
      handleResponse(res, 200, "Hardware deleted succefully", hardware);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getHardwaresByCategory = async (req, res) => {
  const { slug } = req.params;
  const company_id = req.company_id;
  HardwareService.findAllBy({
    hardware_category_slug: slug,
    company_id: company_id,
  })
    .then((hardwares) => {
      handleResponse(res, 200, "All Hardwares", hardwares);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.saveHardware = async (req, res) => {
  const data = { ...req.body };
  const company_id = req.company_id;
  const finishes = await FinishService.findAll({ company_id: company_id });
  const generateFinishesFormat = await generateFinishes(finishes);
  HardwareService.create({ ...data, finishes: generateFinishesFormat })
    .then((hardware) => {
      handleResponse(res, 200, "Hardware created successfully", hardware);
    })
    .catch((err) => {
      handleError(res, err);
    });
};
