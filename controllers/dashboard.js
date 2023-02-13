const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      res.render("dashboard.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  addClient: async (req, res) => {
    try {
      res.render("add-client.ejs");
    } catch (err) {
      console.log(err);
    }
  },
};
