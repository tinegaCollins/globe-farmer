const users = require('../models/users.ts');
import { Request, Response } from 'express';
const bcrypt = require("bcrypt");

exports.addNewUser = async (req:Request, res: Response)=> {
    try{
        const  { name, phone, unHashPassword, location, avatar} = req.body;
        const checkPhone:Array<object> = await users.find({phone: phone});
        if(checkPhone.length == 0){
            const salt = await bcrypt.genSalt();
            const password = await bcrypt.hash(unHashPassword, salt);
            const newSeller = new users({
                name, phone, password, location, avatar
            })
            await newSeller.save()
            // res.send(newSeller._id)
            res.status(200).json(newSeller);
        }
        else{
            res.status(404).json({message: "phone exist"})
        }
  
    }
    catch{
        res.status(404).json({ message: "couldn't create user"})
    }
}

exports.login = async (req:Request, res:Response)=>{
    const { phone, unHashPassword} = req.body;
    const user = await users.findOne({phone: phone});
    if(user){
        if( await bcrypt.compare(unHashPassword, user.password)){
            res.send(user);
        }
        else{
            res.status(500).json({ message : "wrong password"})
        }
    }
    else{
        res.status(500).json({message: "user not found"});
    }
}

exports.getUserAtMessage = async (req:Request, res:Response)=>{
    try{
        const user = await users.findById(req.params.id);
        const data = {
            name: user.name,
            img: user.avatar
        }
    }catch{
        res.status(500).json({message: "user not found"});
    }
}