const mongoose = require("mongoose");
const { Schema } = mongoose;
const itemSchema = require("./Item");

const organizationSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  items: [itemSchema]
});

mongoose.model("Organizations", organizationSchema);
