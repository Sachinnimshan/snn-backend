import Projects from "../model/projects.js";
import data from '../data.js';


export const feedProjects=async(req,res)=>{
    try{
        await Projects.deleteMany({});
        const projects = await Projects.insertMany(data.projects);
        res.status(200).send(projects);
    }catch(error){
        res.status(401).send(error);
    }
}

export const getAllProjects=async(req,res)=>{
    try{
        const projects = await Projects.find({});
        res.status(200).send(projects);
    }catch(error){
        res.status(401).send(error);
    }
}