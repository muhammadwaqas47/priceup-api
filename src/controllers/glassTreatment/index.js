const GlassTreatmentService = require("../../services/glassTreatment");
const { handleResponse, handleError } = require("../../utils/responses");

exports.getAll = async (req, res) => {
  GlassTreatmentService.findAll()
    .then((glassTreatments) => {
      handleResponse(res, 200, "All Glass Treatments", glassTreatments);
    })
    .catch((err) => {
      handleError(res, err);
    });
};

exports.getGlassTreatment = async (req, res) => {};
exports.saveGlassTreatment = async (req, res) => {
  const data = { ...req.body };
  GlassTreatmentService.create(data)
    .then((glassTreatment) => {
      handleResponse(
        res,
        200,
        "Glass Treatment successfully created",
        glassTreatment
      );
    })
    .catch((err) => {
      handleError(res, err);
    });
};
