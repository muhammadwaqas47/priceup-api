const Layout = require("../../models/layouts");

class LayoutService {
  static findAll(data) {
    return new Promise((resolve, reject) => {
      Layout.find(data)
        .then((layouts) => {
          resolve(layouts);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      Layout.create(data)
        .then((layout) => {
          resolve(layout);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = LayoutService;
