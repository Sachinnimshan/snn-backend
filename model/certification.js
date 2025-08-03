import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true, required: true },
    issuer: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Certification = mongoose.model("Certification", certificationSchema);

export default Certification;
