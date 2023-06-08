const FinishService = require("../../services/finish");
const { handleResponse, handleError } = require("../../utils/responses");

exports.getAll = async (req, res) => {
  FinishService.findAll()
    .then((finishes) => {
      handleResponse(res, 200, "All Finishes", finishes);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getFinish = async (req, res) => {};
exports.saveFinish = async (req, res) => {
  const data = { ...req.body };
  FinishService.create(data)
    .then((finish) => {
      handleResponse(res, 200, "Finish successfully created", finish);
    })
    .catch((err) => {
      handleError(res, err);
    });
};
