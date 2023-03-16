const Clients = require("../models/Clients");

module.exports = {
  addNewClient: async (req, res) => {
    try {
      await Clients.create({
        name: req.body.name.trim(),
        phone: req.body.phone.trim(),
        email: req.body.email.trim(),
        personOrCompany: req.body.personOrCompany.trim(),
        address: req.body.address.trim(),
        description: req.body.description.trim(),
      });
      res.redirect("/clients");
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
          name: req.body.modalData.name.trim(),
          phone: req.body.modalData.phone.trim(),
          email: req.body.modalData.email.trim(),
          personOrCompany: req.body.modalData.personOrCompany.trim(),
          address: req.body.modalData.address.trim(),
          description: req.body.modalData.description.trim(),
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
