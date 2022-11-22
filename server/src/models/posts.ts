import mongoose from 'mongoose'
import { PostTypes } from '../types'
const postSchema = new mongoose.Schema<PostTypes>({
    title: String,
    category: String,
    description: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    seller: String,
    location: String,
    farmerName: String,
    price: String,
    images : [String],
});

module.exports = mongoose.model('globefarmer-post', postSchema);