const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  coordinateX: Number,
  coordinateY: Number,
  price: Number,
  name: String,
  description: String,
  locationName: String
});

module.exports = itemSchema;
