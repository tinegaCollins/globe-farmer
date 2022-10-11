const users = require('../models/users.ts');
import { Request, Response } from 'express';
import { UserTypes } from '../types';
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.createNewUser = async (req:Request, res: Response)=> {
    try{
        const  { name,userName,email, phone, unSecurepassword,seller, location} = req.body;
        const checkPhone:Array<object> = await users.find({phone: phone});
        const checkEmail:Array<object> = await users.find({email: email});
        if(checkPhone.length == 0 && checkEmail.length == 0){
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(unSecurepassword, salt);
            const newSeller = new users({
                name, 
                userName, 
                phone, 
                email,
                password,
                location, 
                seller
            });
            await newSeller.save();
            res.status(200).json(newSeller);
        }
        else{
            if(checkPhone.length != 0){
                res.status(500).json({message: "phone already exists"});
            }
           if(checkEmail.length != 0){
                res.status(500).json({message: "email already exists"});
            }
        }
    }
    catch(err){
        res.status(403).json({ message: "error, couldn't create user"})
    }
}

exports.login = async (req:Request, res:Response)=>{
    const { phone,email, password, loginType} = req.body;
    let user: UserTypes; 
    if(loginType == "phone"){
        user = await users.findOne({phone: phone});
    }else{
        user = await users.findOne({email: email});
    }
    if(user){
        if( await bcrypt.compare(password, user.password)){
            const userName = user.userName;
            const token = jwt.sign({userName}, process.env.ACCESS_TOKEN_SECRET);
            res.status(200).json({ accessToken: token, userName: userName});
        }
        else{
            res.status(500).json({ message : "wrong password"})
        }
    }
    else{
        res.status(500).json({ message : `${loginType} not found`})
    }
}

exports.getUser = async (req:Request, res:Response)=>{
    const { id } = req.params;
    const user: UserTypes = await users.findById(id);
    res.status(200).json(user);
}
exports.editUser = async (req:Request, res:Response)=>{
    const { name,userName,email, phone, password, seller, location, id} = req.body;
    const user = await users.findOneAndUpdate({_id: id}, {
        name, 
        userName, 
        phone, 
        email,
        password,
        location, 
        seller
    });
    if(user){
        res.status(200).json({message: "user updated"});
    }
    else{
        res.status(500).json({ message : "user not found"})
    }
}
exports.deleteUser = async (req:Request, res:Response)=>{
    const { id } = req.body;
    const user = await users.findOneAndDelete({_id: id});
    if(user){
        res.status(200).json({message: "user deleted"});
    }
    else{
        res.status(500).json({ message : "user not found"})
    }
}
exports.getUsers = async (req:Request, res:Response)=>{
    const usersList = await users.find();
    res.status(200).json(usersList);
}
exports.registerSeller = async (req:Request, res:Response)=>{
    const { id } = req.body;
    const user = await users.findOneAndUpdate({_id: id}, {
        seller: true,
        productLine : req.body.productLine,
        products: req.body.products,
        posts: req.body.posts
    });
    if(user){
        res.status(200).json({message: "user updated"});
    }
    else{
        res.status(500).json({ message : "user not found"})
    }
}



