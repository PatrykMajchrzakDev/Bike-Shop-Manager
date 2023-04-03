const cloudinary = require("../middleware/cloudinary");
const Clients = require("../models/Clients");
const Order = require("../models/Order");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // get the current page number
      const pageSize = parseInt(req.query.pageSize) || 15; // set the page size
      const skip = (page - 1) * pageSize; // calculate the number of documents to skip
      const ordersCount = await Order.countDocuments(); // count the total number of documents in the collection
      const totalPages = Math.ceil(ordersCount / pageSize); // calculate the total number of pages
      const orders = await Order.find()
        .sort({ createdAt: "desc" })
        .skip(skip)
        .limit(pageSize)
        .lean();
      res.render("dashboard.ejs", {
        orders,
        page,
        pageSize,
        totalPages,
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
      const page = parseInt(req.query.page) || 1; // get the current page number
      const pageSize = parseInt(req.query.pageSize) || 15; // set the page size
      const skip = (page - 1) * pageSize; // calculate the number of documents to skip
      const clientsCount = await Clients.countDocuments(); // count the total number of documents in the collection
      const totalPages = Math.ceil(clientsCount / pageSize); // calculate the total number of pages
      const clients = await Clients.find()
        .sort({ createdAt: "desc" })
        .skip(skip)
        .limit(pageSize)
        .lean(); // retrieve the documents for the current page

      res.render("clients.ejs", {
        clients,
        page,
        pageSize,
        totalPages,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
