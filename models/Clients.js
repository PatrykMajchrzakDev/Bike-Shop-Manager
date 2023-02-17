const mongoose = require("mongoose");

//this is how schematic of db will look like
const ClientsSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
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
  // personOrCompany: {
  //   type: String,
  //   required: true,
  // },
  description: {
    type: String,
    required: false,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Clients", ClientsSchema);
