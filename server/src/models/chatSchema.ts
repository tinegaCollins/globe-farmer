import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    sender1: String,
    sender2: String,
    messages:[
        {
            from : String,
            body: String,
            time: String,
            day: String,
        }
    ]
});

module.exports = mongoose.model('chat', chatSchema);