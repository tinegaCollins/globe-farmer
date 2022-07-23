const chats = require('../models/chatSchema.ts');
const users = require('../models/users.ts');
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

exports.getChats =async (req:Request, res:Response) => {
    try{
        const id = req.params.id;
        const involvedChats = chats.find({ sender1: id } || {sender2 : id});
        let dataToSend:Array<object>;
        involvedChats.forEach(async chat => {
            let userName:String;
            const recentMessage:String = chat.messages[0];
            if(chat.sender1 === id){
                userName = await users.findById(chat.sender2);
            }
            else{
                userName = await users.findById(id);
            }
            const senderId = chat._id;
            const data = {
                name: userName,
                recent: recentMessage,
                id: senderId
            }
            dataToSend.push(data);
        });
        res.send(dataToSend)
    }catch{
        res.send(false);
    }
}

exports.getSingleChat = async (req:Request, res:Response)=>{
    try{
        const { sender1, sender2 } = req.body;
        const chat = await chats.findOne([
            {sender1: sender1, sender2: sender2}
            ||
            {sender1: sender2, sender2: sender1}
        ])
        const dataToSend = {
            chatId: chat._id,
            messages: chat.messages
        }
        res.send(dataToSend);
    }catch{
        res.send(false)
    }
}

