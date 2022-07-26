const post = require('../models/posts.ts');
const location = require('../models/locations.ts');
import { Request, Response} from 'express';

exports.addPost = async (req: Request,res: Response) =>{
    const {name, type, senderID, location:string, farmerName, price , quantity, images, popular} = req.body;
    const temp = { name, type,senderID,location,farmerName,price,quantity, images, popular};
    const newPost = new post(temp);
    await newPost.save();
    res.status(200).json({ message: 'saved'});
    const updateLocation = async (x:string) => {
        const ifLocationExists = await location.findOne({name: x});
        ifLocationExists.count++;
        await ifLocationExists.save();
    }
}
exports.addLocation = async (req:Request, res:Response) => {
    const {name} = req.body;
    const newLocation = new location({name, count:0});
    await newLocation.save();
    res.status(200).json({message: 'saved'});
}

exports.getPopular = async (req:Request, res:Response)=>{
    const popular = await post.find({ popular: true})
    res.send(popular);
}
exports.getByID =async (req:Request, res: Response) => {
    try{
        const id = req.params.id;
        const item = await post.findById(id);
        res.status(200).json(item);
    }
    catch{
        res.status(404).json({message: "not found, try again"});
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
// exports.updatePost = async(req:Request, res:Response)=>{
//     const id = req.body.postID;
//     let curPost:object = getId(id);
// }