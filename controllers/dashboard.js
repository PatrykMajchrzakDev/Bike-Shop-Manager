const cloudinary = require("../middleware/cloudinary");
const Clients = require("../models/Clients");

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
  newOrder: async (req, res) => {
    try {
      res.render("new-order.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  getClients: async (req, res) => {
    try {
      const clients = await Clients.find().sort({ createdAt: "desc" }).lean();
      res.render("clients.ejs", { clients: clients });
    } catch (err) {
      console.log(err);
    }
  },
};
