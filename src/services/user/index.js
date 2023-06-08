const User = require("../../models/users");
class UserService {
  static findAll(data) {
    return new Promise((resolve, reject) => {
        User.find(data)
        .then((users) => {
          resolve(users);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
        User.create(data)
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = UserService;
