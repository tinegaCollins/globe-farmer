import mongoose from 'mongoose';

import { UserTypes } from '../types';
const sellerSchema = new mongoose.Schema<UserTypes>({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    posts:[String],
    location: {
        type: String,
        required: false
    },
    avatar: {
        type: Buffer,
        required: false
    },
    seller: Boolean,
    chats: [String],
    createdAt: {
        type: Date,
        default: new Date()
    },
    saved: [String],
})

module.exports = mongoose.model('globefarmer-user', sellerSchema);