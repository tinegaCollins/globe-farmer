const post = require('../models/posts.ts');
import { Request, Response} from 'express';
exports.addPost = async (req: Request, res: Response) => {
    try {
        const { title, category, description, seller, location, farmerName, price, images } = req.body;
        const newPost = new post({
            title,
            category,
            description,
            seller,
            location,
            farmerName,
            price,
            images
        });
        await newPost.save();
        res.status(200).json({ message: "Post added successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPosts = async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
        const posts = await post.find({ seller: email });
        res.status(200).json({ posts });
    }catch (error) {
        res.status(400).json({ message: "post not found" });
    }
};