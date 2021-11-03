import Reviews from '../model/reviews.js';
import data from '../data.js';
import joi from 'joi';
import errorFunction from '../validations/errorFunction.js';

export const feedReviews=async(req,res)=>{
    try{
        await Reviews.deleteMany({});
        const reviews = await Reviews.insertMany(data.comments);
        res.status(201).send(reviews);
    }catch(error){
        res.status(401).send(error);
    }
}

export const getAllReviews=async(req,res)=>{
    try{
        const reviews = await Reviews.find({});
        res.status(200).send(reviews);
    }catch(error){
        res.status(401).send(error);
    }
}

export const getSingleReview=async(req,res)=>{
    try{
        const review = await Reviews.find({projectID: req.params.id});
        res.status(200).send(review);
    }catch(error){
        res.status(401).send(error);
    }
}

export const postReview=async(req,res,next)=>{
    try{
        const review = new Reviews({
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment,
            projectID: req.body.projectID
        });
        const newreview = await review.save();
        if(newreview){
            res.status(201);
            return res.json(errorFunction(false, "Review Posted", newreview))
        }else{
            res.status(401);
            return res.json(errorFunction(true, "Error in posting review"));
        }
    }catch(error){
        res.status(401);
        return res.json(errorFunction(true, "Something went wrong"));
    }
}