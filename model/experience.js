import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  start: { type: Date, required: true },
  ends: { type: Date, default: null },
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  keyroles: { type: [String], required: true },
  show: { type: Boolean, required: true, default: true },
  current: { type: Boolean, required: true, default: false },
  jobDuration: { type: String, default: "Not Available" },
});

const Experience = mongoose.model("Experience", ExperienceSchema);

export default Experience;
