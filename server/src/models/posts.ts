import mongoose from 'mongoose'
const postSchema = new mongoose.Schema({
    name: String,
    type: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    senderID: String,
    popular: Boolean,
    location: String,
    farmerName: String,
    price: Number,
    quantity: String,
    images : [String]
});

module.exports = mongoose.model('post', postSchema);