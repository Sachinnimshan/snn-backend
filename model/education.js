import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  start: { type: Date, required: true },
  ends: { type: Date, default: null },
  university: { type: String, required: true },
  grade: { type: String, required: true },
  syllabus: { type: [String] },
  show: { type: Boolean, required: true, default: true },
});

const Education = mongoose.model("Education", EducationSchema);

export default Education;
