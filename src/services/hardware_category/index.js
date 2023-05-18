const HardwareCategory = require("../../models/hardwareCategory");
class HardwareCategoryService {
  static findAll(data) {
    return new Promise((resolve, reject) => {
        HardwareCategory
        .findAndCountAll(data)
        .then((category) => {
          resolve(category);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  static findById(id) {
    return new Promise((resolve, reject) => {
        HardwareCategory.findByPk(id, {
        attributes: { exclude: ["nonce"] },
      })
        .then((account) => {
          resolve(account);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  static create(data) {
    console.log(HardwareCategory,'modal');
    return new Promise((resolve, reject) => {
        HardwareCategory.create(data)
        .then((category) => {
          resolve(category);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = HardwareCategoryService;
