const Hardware = require("../../models/hardwares");
class HardwareService {
  static findAll(data) {
    return new Promise((resolve, reject) => {
      Hardware.find(data)
        .then((hardwares) => {
          resolve(hardwares);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  static findBy(data) {
    return new Promise((resolve, reject) => {
      Hardware.findOne(data)
        .then((hardware) => {
          resolve(hardware);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      Hardware.create(data)
        .then((hardware) => {
          resolve(hardware);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = HardwareService;
