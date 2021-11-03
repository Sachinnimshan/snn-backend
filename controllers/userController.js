import MyUser from '../model/user.js';
import data from '../data.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../util.js';
import errorFunction from '../validations/errorFunction.js';

export const feedUsers=async(req,res)=>{
    try{
        await MyUser.deleteMany({});
        const users = await MyUser.insertMany(data.users);
        res.status(200).send({users});
    }catch(error){
        res.status(401).send({message: error});
    }
}

export const viewUsers=async(req,res)=>{
    try{
        const users = await MyUser.find({});
        res.status(200).send(users);
    }catch(error){
        res.status(401).send({message: error});
    }
}

export const userSignIn=async(req,res)=>{
    try{
        const user = await MyUser.findOne({email: req.body.email});
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                res.status(200).send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user)
                });
                return;
            }
        }
        res.status(401).send({message: "Invalid username or password"});
    }catch(error){
        res.status(401).send({message: error});
    }
}

export const userRegister=async(req,res,next)=>{
        const exitinguser = await MyUser.findOne({email: req.body.email});
        if(exitinguser){
            res.status(401);
            return res.json(errorFunction(true, "This Email is Already Exists"));
        }else{
        try{
            const user = new MyUser({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8)
            });
        const newuser = await user.save();
        res.send({
            _id: newuser._id,
            name: newuser.name,
            email: newuser.email,
            token: generateToken(newuser)
        });
    }catch(error){
        res.status(401);
        return res.json(errorFunction(true, "Something went wrong"));
    }
    }
}



