const path = require("path");

module.exports = {
  entry: "./webpack/dateFns/index.js",
  output: {
    filename: "orderNotificationsBundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
