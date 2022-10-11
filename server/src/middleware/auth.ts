import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');
require('dotenv').config();
interface requestType{
    headers: Object,
    body: Object,
    params: Object,
    query: Object,
    user: Object
}
const authenticateToken = (req:requestType, res:Response, next:Function)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err:any, user:any)=>{
        if(err) return res.sendStatus(403);
        req.user = user
        next();
    })
}

export default authenticateToken;