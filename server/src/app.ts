const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const postController = require('./controllers/post.ts');
const chatControllers = require('./controllers/chats.ts');
import { Request, Response, NextFunction } from 'express';
import { config } from './config/config';
const app = express();
mongoose.connect(config.mongo.url)
.then(()=>{
    console.log('connected')
    startServer()
})
.catch( (error: any) => console.log(error))

const startServer = ()=>{
    app.use((req:Request,res:Response,next:NextFunction)=>{
        res.header("Access-Control-Allow-Origin",'*');
        res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type, Accept, Authorization')

        if(req.method == 'OPTIONS'){
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });
    app.use(express.json());
    //user routes
    app.use('/api/user', require('./routes/user-routes.ts'));
    //chats controllers
    app.post('/add-new-chat', chatControllers.addNewChat);
    app.get('/check-if-chat/:sender1/:sender2/:full', chatControllers.checkIfChatAvailable);
    app.post('/send-message', chatControllers.sendMessage);
    app.get('/get-all-chats/:id', chatControllers.getAllChats);
    app.post('/get-single-chat', chatControllers.getSingleChat);

    //post controllers 
    app.get('/get-by-id/:id', postController.getByID);
    app.post('/add-post', postController.addPost);
    app.get('/get-popular', postController.getPopular);


    //server on
    http.createServer(app).listen(process.env.DEV_PORT, ()=> console.log('listening on port 8000'));
}

