const HardwareService = require("../../services/hardware");
const { nestedObjectsToDotNotation } = require("../../utils/common");
const { handleResponse, handleError } = require("../../utils/responses");

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
      handleResponse(res, 200, hardware);
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
      handleResponse(res, 200, hardware);
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
      handleResponse(res, 200, hardware);
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
      handleResponse(res, 200, hardware);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.deleteHardware = async (req, res) => {
  const { id } = req.params;
  HardwareService.delete({ _id: id })
    .then((hardware) => {
      handleResponse(res, 200, "Hardware succefully deleted", hardware);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getHardwaresByCategory = async (req, res) => {
  const { slug } = req.params;
  HardwareService.findAllBy({ hardware_category_slug: slug })
    .then((hardwares) => {
      handleResponse(res, 200, "All Hardwares", hardwares);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.saveHardware = async (req, res) => {
  const data = { ...req.body };
  HardwareService.create(data)
    .then((hardware) => {
      handleResponse(res, 200, "Hardware successfully created", hardware);
    })
    .catch((err) => {
      handleError(res, err);
    });
};
