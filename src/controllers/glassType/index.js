const GlassTypeService = require("../../services/glassType");
const { handleResponse, handleError } = require("../../utils/responses");

exports.getAll = async (req, res) => {
  GlassTypeService.findAll()
    .then((glassTypes) => {
      handleResponse(res, 200, "All Glass Types", glassTypes);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getGlassType = async (req, res) => {};
exports.saveGlassType = async (req, res) => {
  const data = { ...req.body };
  GlassTypeService.create(data)
    .then((glassType) => {
      handleResponse(res, 200, "Glass Type successfully created", glassType);
    })
    .catch((err) => {
      handleError(res, err);
    });
};
