const Finish = require("../../models/finishes");

class FinishService {
  static findAll(data) {
    return new Promise((resolve, reject) => {
      Finish.find(data)
        .then((finishes) => {
          resolve(finishes);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findBy(data) {
    return new Promise((resolve, reject) => {
      Finish.findOne(data)
        .then((finish) => {
          resolve(finish);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      Finish.create(data)
        .then((finish) => {
          resolve(finish);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = FinishService;
