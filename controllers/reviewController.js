import Reviews from '../model/reviews.js';
import data from '../data.js';

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
        const review = await Reviews.find({project: req.params.id});
        res.status(200).send(review);
    }catch(error){
        res.status(401).send(error);
    }
}