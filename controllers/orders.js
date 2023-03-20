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
};
