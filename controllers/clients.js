const Clients = require("../models/Clients");

module.exports = {
  addNewClient: async (req, res) => {
    try {
      await Clients.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        personOrCompany: req.body.personOrCompany,
        address: req.body.address,
        description: req.body.description,
      });
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  updateClient: async (req, res) => {
    try {
      //Modal data is taken from public/js/clients.js
      await Clients.findOneAndUpdate(
        {
          _id: req.body.modalData.clientID,
        },
        {
          name: req.body.modalData.name,
          phone: req.body.modalData.phone,
          email: req.body.modalData.email,
          personOrCompany: req.body.modalData.personOrCompany,
          address: req.body.modalData.address,
          description: req.body.modalData.description,
        },
        {
          new: true,
        }
      );
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
};
