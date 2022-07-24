import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    password: String,
    posts:[String],
    location: String,
    avatar: String,
    seller: Boolean,
    chats: [String]
})

module.exports = mongoose.model('seller', sellerSchema);