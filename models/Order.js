const mongoose = require("mongoose");
const dateFns = require("date-fns");

//this is how schematic of db will look like
const OrderSchema = new mongoose.Schema({
  dueDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  client: {
    type: Object,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
