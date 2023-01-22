import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  jobDuration: { type: String, unique: true, required: true },
  startYear: { type: Number, required: true },
  endYear: { type: Number, required: true },
  startMonth: { type: Number, required: true },
  endMonth: { type: Number, required: true },
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  keyroles: { type: [String], required: true },
  show: { type: Boolean, required: true, default: true },
});

const Experience = mongoose.model("Experience", ExperienceSchema);

export default Experience;
