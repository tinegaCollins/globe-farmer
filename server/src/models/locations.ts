import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    name: String,
    count: Number
})

module.exports = mongoose.model('location', locationSchema);