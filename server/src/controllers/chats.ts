const chats = require('../models/chatSchema.ts');
const user = require('../models/users.ts');
import { Request, Response } from 'express';

exports.addNewChat = async (req: Request, res: Response) => {
  const { users, messages, createdAt, updatedAt } = req.body;
  try {
    const newChat = await chats.create({
      users,
      messages,
      createdAt,
    });
    users.forEach(async (one: any) => {
      const foundUser = await user.findById(one);
      foundUser.chats.push(newChat._id);
      await foundUser.save();
    });
    res.status(200).json({ messages: "Chat created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.addMessage = async (req: Request, res: Response) => {
    const { chatId, message } = req.body;
    try {
        const chat = await chats.findById(chatId);
        chat.messages.push(message);
        chat.updatedAt = new Date();
        await chat.save();
        res.status(200).json({ messages: 'Message added successfully'});
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getChats = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const foundUser = await user.findById(userId);
    const chatsFound: Array<string> = foundUser.chats;
    interface Chat {
      _id: string;
      recentMessage: string;
      updatedAt: Date;
      otherUserName: string;
    }
    const chatsArray: Array<Chat> = [];
    chatsFound.forEach(async (chatId: string) => {
      const chat = await chats.findById(chatId);
      const otherUser = await chat.users.filter(
        (user: string) => user !== userId
      );
      const other = await user.findById(otherUser[0]);
      const otherUserName = other.userName;
      const recentMessage = chat.messages[chat.messages.length - 1];
      const updatedAt = chat.updatedAt;
      const chatObject: Chat = await {
        _id: chat._id,
        recentMessage,
        updatedAt,
        otherUserName,
      };
        chatsArray.push(chatObject);
        if (chatsArray.length === chatsFound.length) {
            res.status(200).json(chatsArray);
        }
    });
  } catch {
    res.status(203).json({ messages: "Error getting chats" });
  }
};

exports.getMessages = async (req: Request, res: Response) => {
    const chatId = req.params.id;
    try {
        const chat = await chats.findById(chatId);
        res.status(200).json(chat.messages);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getOtherUser = async (req: Request, res: Response) => {
    const { userId, chatId } = req.params;
    try {
        const chat = await chats.findById(chatId);
        const otherUser = await chat.users.filter((user: string) => user !== userId);
        const other = await user.findById(otherUser[0]);
        res.status(200).json(other.userName);
    } catch (error) {
        res.status(500).json(error);
    }
}

