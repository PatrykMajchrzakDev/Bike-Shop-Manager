const Order = require("../models/Order");

module.exports = {
  addNewOrder: async (req, res) => {
    try {
      await Order.create({
        client: req.body.client,
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
