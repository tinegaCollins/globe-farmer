const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const postController = require('./controllers/post.ts');
const userControllers = require('./controllers/users.ts');
const chatControllers = require('./controllers/chats.ts');
import { Request, Response, NextFunction } from 'express';
const app = express();
mongoose.connect('mongodb://localhost:27017/fam')
.then(()=>{
    console.log('connected')
    startServer()
})
.catch( error => console.log(error))

const startServer = ()=>{
    app.use((req:Request,res:Response,next:NextFunction)=>{
        res.header("Access-Control-Allow-Origin",'*');
        res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type, Accept, Authorization')

        if(req.method == 'OPTIONS'){
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELEte, GET');
            return res.status(200).json({});
        }
        next();
    });
    app.use(express.json());
    app.post('/add-post', postController.addPost);
    app.get('/get-popular', postController.getPopular);
    //user routes
    app.post('/register-user', userControllers.addNewUser);
    app.post('/login-user', userControllers.login);
    http.createServer(app).listen('8080', ()=> console.log('listening on port 8080'));

    //chats controllers
    app.post('/add-new-chat', chatControllers.addNewChat);
    app.get('/check-if-chat/:sender1/:sender2/:full', chatControllers.checkIfChatAvailable);
    app.post('/send-message', chatControllers.sendMessage);
    app.get('/get-all-chats/:id', chatControllers.getAllChats);
    app.get('/get-data-at-messages/:id', userControllers.getUserAtMessage);
    app.post('/get-single-chat', chatControllers.getSingleChat);

}
