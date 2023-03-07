const mongoose = require("mongoose");

//this is how schematic of db will look like
const OrderSchema = new mongoose.Schema({
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
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
  isUrgent: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
