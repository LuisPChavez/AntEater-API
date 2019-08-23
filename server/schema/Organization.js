const mongoose = require("mongoose");
const { Schema } = mongoose;
const itemSchema = require("./Item");

const organizationSchema = new Schema({
  name: String,
  email: String,
  description: String,
  items: [itemSchema]
});

mongoose.model("Organizations", organizationSchema);
