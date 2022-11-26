import mongoose from 'mongoose';

import { singleChat, } from '../types';
const chatSchema = new mongoose.Schema<singleChat>({
    users: {
        type: [String],
    },
    messages: {
        type: [{
            sender: String,
            message: String,
            createdAt: {
                type: Date,
                default: Date.now()
            },
            read: {
                type: Boolean,
                default: false
            }
        }],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('globefarmer-chat', chatSchema);