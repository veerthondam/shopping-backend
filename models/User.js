const mongoose = require("mongoose");

// User schema definition
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, // Hashed password
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, default: "active" },
});

// Compile schema into a model
const User = mongoose.model("User", userSchema);

module.exports = User;
