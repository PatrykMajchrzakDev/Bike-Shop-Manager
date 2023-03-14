const mongoose = require("mongoose");
const { format } = require("date-fns");

//this is how schematic of db will look like
const ClientSchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: false,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  createdAt: {
    type: String,
    default: format(new Date(), "dd-MM-yyyy"),
  },
});

module.exports = mongoose.model("Clients", ClientSchema);
