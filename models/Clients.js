const mongoose = require("mongoose");

//this is how schematic of db will look like
const ClientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    requred: true,
  },
  address: {
    type: String,
    requred: false,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  personOrCompany: {
    type: String,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

//assign model
const Clientsdb = mongoose.model("clientdb", ClientsSchema);

module.exports = Clientsdb;
