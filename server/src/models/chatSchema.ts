import mongoose from 'mongoose';

import { singleChat, } from '../types';
const chatSchema = new mongoose.Schema<singleChat>({
    chatId: {
        type: String,
    },
    users: {
        type: [String],
    },
    messages: {
        type: [Object],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
    }
});

module.exports = mongoose.model('chat', chatSchema);