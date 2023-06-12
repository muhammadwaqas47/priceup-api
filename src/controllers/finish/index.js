const FinishService = require("../../services/finish");
const { handleResponse, handleError } = require("../../utils/responses");

exports.getAll = async (req, res) => {
  const company_id = req.company_id;
  FinishService.findAll({ company_id: company_id })
    .then((finishes) => {
      handleResponse(res, 200, "All Finishes", finishes);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getFinish = async (req, res) => {
  const { id } = req.params;
  FinishService.findBy({ _id: id })
    .then((finish) => {
      handleResponse(res, 200, finish);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

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
