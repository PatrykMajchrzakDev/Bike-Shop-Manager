const Clients = require("../models/Clients");

module.exports = {
  getAllClients: async (req, res) => {
    try {
      const clients = await Clients.find().sort({ name: "desc" }).lean();
      res.render("partials/_clientTable");
    } catch (err) {
      console.log(err);
    }
  },

  addNewClient: async (req, res) => {
    try {
      await Clients.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        personOrCompany: req.body.personOrCompany,
        address: req.body.address,
      });
      res.redirect("/dashboard.ejs");
    } catch (err) {
      console.log(err);
    }
  },
};
