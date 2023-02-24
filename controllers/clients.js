const Clients = require("../models/Clients");
// import { modalData } from "../public/js/clients";

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
      await Clients.findOneAndUpdate(
        {
          _id: modalData[0],
        },
        {
          name: modalData[2],
          phone: modalData[3],
          address: modalData[6],
          email: modalData[4],
          description: modalData[8],
          personOrCompany: modalData[5],
        }
      );
      console.log("Edited client");
      res.redirect("/clients");
    } catch (err) {
      console.log(err);
    }
  },
};
