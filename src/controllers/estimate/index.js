const EstimateService = require("../../services/estimate");
const { nestedObjectsToDotNotation } = require("../../utils/common");
const { handleResponse, handleError } = require("../../utils/responses");

exports.getAll = async (req, res) => {
  const company_id = req.company_id;
  EstimateService.findAll({ company_id: company_id })
    .then((estimates) => {
      handleResponse(res, 200, "All Estimates", estimates);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getEstimate = async (req, res) => {};

exports.updateEstimate = async (req, res) => {};

exports.deleteEstimate = async (req, res) => {};

exports.saveEstimate = async (req, res) => {
  const data = { ...req.body };
  EstimateService.create(data)
    .then((estimate) => {
      handleResponse(res, 200, "Estimate created successfully", estimate);
    })
    .catch((err) => {
      handleError(res, err);
    });
};
