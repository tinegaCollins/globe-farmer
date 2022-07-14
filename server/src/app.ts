const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const postController = require('./controllers/post.ts');
const userControllers = require('./controllers/users.ts')
const app = express();
mongoose.connect('mongodb://localhost:27017/fam')
.then(()=>{
    console.log('connected')
    startServer()
})
.catch( error => console.log(error))

const startServer = ()=>{
    app.use((req,res,next)=>{
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
    app.post('/register-user', userControllers.addNewSeller);
    app.post('/login-user', userControllers.login);
    http.createServer(app).listen('5000', ()=> console.log('listening on port 5000'));

}