import errorFunction from './errorFunction.js';
import joi from 'joi';

const validation = joi.object({
        name: joi.string().trim(true).min(5).max(25).required(),
        email: joi.string().email().trim(true).required(),
        comment: joi.string().min(5).required(),
        projectID: joi.string().required()
});

export const reviewValidation=async(req,res,next)=>{
    const payload = {
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment,
        projectID: req.body.projectID
    };

    const {error} = validation.validate(payload);
    if(error){
        res.status(401);
        return res.json(errorFunction(true, `Something Went wrong : ${error.message}`));
    }else{
        next();
    }
}