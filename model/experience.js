import mongoose from 'mongoose';

const ExperienceSchema  = new mongoose.Schema({
    jobDuration: {type: String, unique:true, required: true},
    companyName: {type: String, required: true},
    jobTitle: {type: String, required: true},
    keyroles: {type: [String], required: true},
});

const Experience = mongoose.model("Experience", ExperienceSchema);

export default Experience;