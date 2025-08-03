import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    level: { type: String, required: true },
    icon: { type: String, required: true },
    category: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
