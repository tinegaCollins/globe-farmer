const post = require('../models/posts.ts');
const location = require('../models/locations.ts');
import { Request, Response} from 'express';

exports.addPost = async (req: Request, res: Response) => {
    console.log(req.body);
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
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
