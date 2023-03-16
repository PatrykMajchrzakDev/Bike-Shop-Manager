const cloudinary = require("../middleware/cloudinary");
const Clients = require("../models/Clients");
const Order = require("../models/Order");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      const orders = await Order.find().sort({ createdAt: "desc" }).lean();
      res.render("dashboard.ejs", {
        orders: orders,
      });
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
      res.render("clients.ejs", {
        clients: clients,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
