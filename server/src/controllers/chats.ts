const chats = require('../models/chatSchema.ts');
const users = require('../models/users.ts');
import { Request, Response } from 'express';


exports.addNewChat = async (req:Request, res:Response) => {
    try{
        const {sender1, sender2 , message } = req.body;
        const newChat = new chats({
            sender1 : sender1,
            sender2: sender2,
            messages: []
        })
        await newChat.save();
        newChat.messages.push(message);
        await newChat.save();
        const chatId = newChat._id;
        await users.findByIdAndUpdate(sender1, {$push: {chats: chatId}});
        await users.findByIdAndUpdate(sender2, {$push: {chats: chatId}});
        res.status(200).json({ response: "sent"});
    }catch{
        res.status(404).json({ response: "not sent"});
    }
}
exports.checkIfChatAvailable = async (req:Request, res:Response) => {
    try{
        const sender1 = req.params.sender1;
        const sender2 = req.params.sender2;
        const full = req.params.full;
        const chat = await chats.findOne(
            {
                $or: [
                    {sender1: sender1, sender2: sender2},
                    {sender1: sender2, sender2: sender1}
                ]
            }
        )
        if(chat){
            if(full === 'yes'){
                res.send(chat);
            }
            else{
                res.status(200).send(true);
            }
        }else{
            res.status(404).json({ response: "chat not available"});
        }
    }catch{
        res.send("no response")
    }
}
exports.sendMessage = async (req:Request, res:Response) =>{
    try{
        const { chatId, message } = req.body;
        const chat = await chats.findById(chatId);
        chat.messages.push(message);
        await chat.save();
        res.send(true);
    }catch{
        res.send(false);
    }
}

exports.getAllChats = async (req:Request, res:Response)=>{
    try{
        const user = await users.findById(req.params.id);
        const involvedChats = user.chats;
        const dataToSend = [];
        for(let i = 0; i < involvedChats.length; i++){
            const chat = await chats.findById(involvedChats[i]);
            let otherUser:String;
            if(chat.sender1 == user._id){
                let temp = await users.findById(chat.sender2);
                otherUser = temp.name;
            }
            else{
                let temp = await users.findById(chat.sender1);
                otherUser = temp.name;
            }
            const data = {
                chatId: chat._id,
                recent: chat.messages[chat.messages.length - 1],
                otherUser: otherUser
            }
            dataToSend.push(data);
        }
        res.send(dataToSend);
    }catch{
        res.send(false)
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

