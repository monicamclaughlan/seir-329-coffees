// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const coffeeSchema = new Schema(
  {
    name: String,
    img: String,
    description: String,
  },
  { timestamps: true }
);

// Create our Model Object
const Coffee = model("Coffee", coffeeSchema);

// Export our Model Object
module.exports = Coffee;