const post = require('../models/posts.ts');
import { Request, Response} from 'express';

exports.addPost = async (req: Request,res: Response) =>{
    const {name, type, senderID, location, farmerName, price , quantity, images, popular} = req.body;
    const temp = { name, type,senderID,location,farmerName,price,quantity, images, popular};
    const newPost = new post(temp);
    await newPost.save();
    res.status(200).json({ message: 'saved'})
}
const getId = async (id:string)=>{
    const item:object = await post.findById(id);
    return item
}
exports.getPopular = async (req:Request, res:Response)=>{
    const popular = await post.find({ popular: true})
    res.send(popular);
}
exports.getByID =async (req:Request, res: Response) => {
    try{
        res.send(getId(req.params.id));
    }
    catch{
        res.status(404).json({ message: 'not found'})
    }
}
exports.deletePost = async (req:Request, res:Response) => {
    try{
        const id:string = req.params.id;
        const item:object = await post.findById(id);
    }
    catch{
        res.status(404).json({ message: "couldn't delete"})
    }
}
exports.updatePost = async(req:Request, res:Response)=>{
    const id = req.body.postID;
    let curPost:object = getId(id);
}