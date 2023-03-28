const Order = require("../models/Order");
const Clients = require("../models/Clients");

module.exports = {
  addNewOrder: async (req, res) => {
    try {
      (clientInfo = await Clients.findById({
        _id: req.body.client,
      })),
        await Order.create({
          client: clientInfo,
          dueDate: req.body.dueDate,
          description: req.body.description,
          status: "New",
          service: req.body.selectTypeOfService,
        });
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  updateOrder: async (req, res) => {
    try {
      //Modal data is taken from public/js/clients.js
      await Order.findOneAndUpdate(
        {
          _id: req.body.modalOrderData.id,
        },
        {
          status: req.body.modalOrderData.status,
          service: req.body.modalOrderData.service,
          client: req.body.modalOrderData.client,
          dueDate: req.body.modalOrderData.dueDate,
          description: req.body.modalOrderData.description,
        },
        {
          new: true,
        }
      );
      res.json("Order informations changed");
    } catch (err) {
      console.log(err);
    }
  },
  deleteOrder: async (req, res) => {
    try {
      await Order.findOneAndDelete({
        _id: req.body.orderID,
      });
      res.json("Deleted order");
    } catch (error) {
      console.log(error);
    }
  },
};
