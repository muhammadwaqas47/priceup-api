const HardwareCategory = require("../../models/hardwareCategories");
class HardwareCategoryService {
  static findAll(data) {
    return new Promise((resolve, reject) => {
      HardwareCategory.find(data)
        .then((users) => {
          resolve(users);
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
