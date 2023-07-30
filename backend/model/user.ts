import mongoose from "mongoose";

const user = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  fullname: {
    type: String,
    default: function () {
      return this.first_name + " " + this.last_name;
    },
  },
  phone: { type: String, required: true, unique: true, min: 11, max: 11 },
  avatar: { type: String, default: null },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["admin", "user", "bloger", "teammate"],
  },
  code_meli: { type: String, default: null },
  date_of_birth: { type: String, default: null },
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
  isActive: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: null },
});

let user = mongoose.models.user || mongoose.model("user", user);

module.exports = user;
