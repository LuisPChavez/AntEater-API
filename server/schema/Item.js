const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  coordinateX: { type: Number, required: true },
  coordinateY: { type: Number, required: true },
  price: { type: Number, required: true },
  name: { type: String, required: true },
  description: String,
  locationName: String
});

module.exports = itemSchema;
