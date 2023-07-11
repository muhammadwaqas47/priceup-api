const GlassTreatment = require("../../models/glassTreatments");

class GlassTreatmentService {
  static findAll(data) {
    return new Promise((resolve, reject) => {
      GlassTreatment.find(data)
        .then((glassTreatments) => {
          resolve(glassTreatments);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findBy(data) {
    return new Promise((resolve, reject) => {
      GlassTreatment.findOne(data)
        .then((glassTreatment) => {
          resolve(glassTreatment);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static delete(condition) {
    return new Promise((resolve, reject) => {
      GlassTreatment.findOneAndDelete(condition)
        .then((glassTreatment) => {
          resolve(glassTreatment);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      GlassTreatment.create(data)
        .then((glassTreatment) => {
          resolve(glassTreatment);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = GlassTreatmentService;
