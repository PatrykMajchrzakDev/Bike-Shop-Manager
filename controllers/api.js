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
        _id: req.params.id,
      });
      res.json(clickedOrderInfo);
    } catch (error) {
      throw error;
    }
  },
  getOrders: async (req, res) => {
    try {
      const orders = await Order.find().sort({ createdAt: "desc" }).lean();

      //Can use $ne (not equal) to get only orders that dont have status "Done"
      //     const orders = await Order.find({ status: { $ne: 'Done' } }).sort({ createdAt: "desc" }).lean();

      res.json(orders);
    } catch (error) {
      console.log(error);
    }
  },
};
