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
    seller: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        town: {
            type: String,
            required: true
        },
        county: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        businessAddress: {
            type: String,
            required: true
        },
        businessEmail: {
            type: String,
            required: true
        },
        businessPhone: {
            type: String,
            required: true
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