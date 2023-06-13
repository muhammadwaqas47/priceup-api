const CompanyService = require("../../services/company");
const { nestedObjectsToDotNotation } = require("../../utils/common");
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

exports.getCompany = async (req, res) => {
  const { id } = req.params;
  CompanyService.findBy({ _id: id })
    .then((company) => {
      handleResponse(res, 200, "Success", company);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.updateCompany = async (req, res) => {
  const { id } = req.params;
  const payload = { ...req.body };
  const data = await nestedObjectsToDotNotation(payload);
  CompanyService.update({ _id: id }, data)
    .then((company) => {
      handleResponse(res, 200, "Company updated successfully", company);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.deleteCompany = async (req, res) => {
  const { id } = req.params;
  CompanyService.delete({ _id: id })
    .then((company) => {
      handleResponse(res, 200, "Company deleted succefully", company);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.saveCompany = async (req, res) => {
  const data = { ...req.body };
  CompanyService.create(data)
    .then((company) => {
      handleResponse(res, 200, "Company created succefully", company);
    })
    .catch((err) => {
      handleError(res, err);
    });
};
