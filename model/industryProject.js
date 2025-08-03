import mongoose from "mongoose";

const industryProjectSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true, required: true },
    client: { type: String, required: true },
    period: { type: String, required: true },
    tasks: { type: [String], required: true },
    technologies: { type: [String], required: true },
    image: { type: String, required: true },
    website: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const IndustryProjects = mongoose.model(
  "IndustryProjects",
  industryProjectSchema
);

export default IndustryProjects;
