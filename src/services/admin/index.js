const Admin = require("../../models/admins");

class AdminService {
  static findAll(data) {
    return new Promise((resolve, reject) => {
      Admin.find(data)
        .then((admins) => {
          resolve(admins);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = AdminService;
