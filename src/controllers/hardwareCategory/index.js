const HardwareCategoryService = require("../../services/hardwareCategory");
const { handleResponse, handleError } = require("../../utils/responses");

exports.getAll = async (req, res) => {
  HardwareCategoryService.findAll()
    .then((categories) => {
      handleResponse(res, 200, "All Hardware Categories", categories);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getCategory = async (req, res) => {
  const { id } = req.params;
  HardwareCategoryService.findBy({ _id: id })
    .then((category) => {
      handleResponse(res, 200, "Success", category);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.saveCategory = async (req, res) => {
  const data = { ...req.body };
  HardwareCategoryService.create(data)
    .then((category) => {
      handleResponse(
        res,
        200,
        "Hardware Category created succefully",
        category
      );
    })
    .catch((err) => {
      handleError(res, err);
    });
};
