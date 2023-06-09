const HardwareService = require("../../services/hardware");
const { handleResponse, handleError } = require("../../utils/responses");

exports.getAll = async (req, res) => {
  HardwareService.findAll()
    .then((hardwares) => {
      handleResponse(res, 200, "All Hardwares", hardwares);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getHardware = async (req, res) => {};
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
