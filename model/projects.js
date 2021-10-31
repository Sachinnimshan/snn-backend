import mongoose from 'mongoose';

const projects = new mongoose.Schema({
    title: {type: String, unique:true, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    demo: {type: String, required: true},
    youtube: {type: String, required: true},
    github: {type: String, required: true}
},{
    timestamps: true
});

const Projects = mongoose.model("Projects", projects);

export default Projects;