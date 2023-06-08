const CompanyService = require("../../services/company");
const { handleResponse, handleError } = require("../../utils/responses");

exports.getAll = async (req, res) => {
  CompanyService.findAll()
    .then((companies) => {
      handleResponse(res, 200, "All Companies", companies);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getCompany = async (req, res) => {};
exports.saveCompany = async (req, res) => {
  const data = { ...req.body };
  CompanyService.create(data)
    .then((company) => {
      handleResponse(res, 200, "Company succefully created", company);
    })
    .catch((err) => {
      handleError(res, err);
    });
};