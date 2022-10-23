const chats = require('../models/chatSchema.ts');
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
require('dotenv').config();

import { singleChat, message } from '../types';
exports.addNewChat = async (req:Request, res:Response)=>{ 
    const { users, message } =  req.body;
    try{
        const newChat = new chats({
            users: users,
            messages: message
        });
        await newChat.save();
        res.status(200).json(newChat);
    }catch(err){
        res.status(403).json({ message: "error, couldn't create chat"})
    }
}
