const chats = require('../models/chats.ts');
import { Request, Response } from 'express';

exports.addChat = async(req:Request, res:Response)=>{
    const { sender1 , sender2, message } = req.body;
    const newChat = new chats({
        sender1,
        sender2,
        messages: message
    })
    await newChat.save();
    res.status(200).json({ response: "sent"})
}

exports.sendMessage = async (req:Request, res:Response) =>{
}