const Order = require("../models/Order");
const Clients = require("../models/Clients");

module.exports = {
  getClients: async (req, res) => {
    try {
      const clients = await Clients.find().sort({ createdAt: "desc" }).lean();
      res.json(clients);
    } catch (err) {
      console.log(err);
    }
  },
  getClickedOrderInfo: async (req, res) => {
    try {
      const clickedOrderInfo = await Order.findById({
        _id: req.params,
      });
      res.json(clickedOrderInfo);
    } catch (error) {
      throw error;
    }
  },
};
