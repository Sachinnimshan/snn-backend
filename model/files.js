import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    resume: {type: String}
});

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
