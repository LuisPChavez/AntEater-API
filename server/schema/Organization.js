const mongoose = require("mongoose");
const { Schema } = mongoose;

const organizationSchema = new Schema({
  id: String,
  name: String,
  email: String,
  description: String
});

mongoose.model("Organizations", organizationSchema);
