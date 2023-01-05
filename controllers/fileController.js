import data from '../data.js';
import Resume from '../model/files.js';

export const uploadResume =async(req,res)=>{
    try{
        await Resume.deleteMany({});
        const resume = await Resume.insertMany(data.resume);
        res.status(200).send({resume});
    }catch(error){
        res.status(200).send(error);
    }
}

export const downloadResume = async(req,res)=>{
    try{
        const file = "./K.G.A Sachin Nimshan - CV.pdf";
        if(file){
            res.download(file);
        }
    }catch(error){
        res.status(401).send(error);
    }
}



