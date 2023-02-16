const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      res.render("dashboard.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  newClient: async (req, res) => {
    try {
      res.render("new-client.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  getClients: async (req, res) => {
    try {
      res.render("clients.ejs");
    } catch (err) {
      console.log(err);
    }
  },
};
