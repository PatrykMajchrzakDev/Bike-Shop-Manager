const Order = require("../models/Order");

module.exports = {
  addNewOrder: async (req, res) => {
    try {
      await Order.create({
        name: req.body.name,
        description: req.body.description,
      });
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
};
