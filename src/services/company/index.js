const Company = require("../../models/companies");

class CompanyService {
  static findAll(data) {
    return new Promise((resolve, reject) => {
      Company.find(data)
        .then((companies) => {
          resolve(companies);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findBy(data) {
    return new Promise((resolve, reject) => {
      Company.findOne(data)
        .then((company) => {
          resolve(company);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      Company.create(data)
        .then((company) => {
          resolve(company);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = CompanyService;
