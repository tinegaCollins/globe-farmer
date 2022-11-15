import mongoose from 'mongoose';

import { UserTypes } from '../types';
const sellerSchema = new mongoose.Schema<UserTypes>({
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
    seller: {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        town: {
            type: String,
        },
        county: {
            type: String,
        },
        title: {
            type: String,
        },
        businessAddress: {
            type: String,
        },
        businessEmail: {
            type: String,
        },
        businessPhone: {
            type: String,
        }
    },
    chats: [String],
    createdAt: {
        type: Date,
        default: new Date()
    },
    saved: [String]
})

module.exports = mongoose.model('globefarmer-user', sellerSchema);