import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

const MyUser = mongoose.model("MyUsers", userSchema);

export default MyUser;
