const LayoutService = require("../../services/layout");
const { handleResponse, handleError } = require("../../utils/responses");

exports.getAll = async (req, res) => {
  LayoutService.findAll()
    .then((layouts) => {
      handleResponse(res, 200, "All Layouts", layouts);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getLayout = async (req, res) => {};

exports.saveLayout = async (req, res) => {
  const data = { ...req.body };
  LayoutService.create(data)
    .then((layout) => {
      handleResponse(res, 200, "Layout succefully created", layout);
    })
    .catch((err) => {
      handleError(res, err);
    });
};
