import mongoose from 'mongoose';


const reviews = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    comment: {type: String, required: true},
    projectID: {type: String, required: true}
},{
    timestamps: true
});

const Reviews = mongoose.model("Reviews", reviews);

export default Reviews;