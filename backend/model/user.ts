import mongoose, { Document, Model, Schema } from "mongoose";

// Define the interface for the time series data document
interface userInterface extends Document {
  first_name: string;
  last_name: string;
  fullname: string;
  phone: string;
  avatar: string;
  role: string;
  code_meli: string;
  date_of_birth: string;
  password: string;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
}

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  phone: { type: String, required: true, unique: true, min: 11, max: 11 },
  password: { type: String, required: true },
  avatar: { type: String, default: null },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["admin", "user", "bloger"],
  },
  code_meli: { type: String, default: null },
  date_of_birth: { type: String, default: null },
  isActive: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: null },
});

export const User: Model<userInterface> = mongoose.model<userInterface>(
  "User",
  userSchema
);

// address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
