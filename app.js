const express = require('express')
const {connectToDb, getDb} = require('./db')
const { ObjectId } = require('mongodb')
const app = express()
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8080',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())


// db connection
let db

connectToDb((err)=>{
    if(!err){
        app.listen(3000, ()=>{
            console.log('app listening on port 3000')
        })
        db = getDb()
    }
})


app.get('/produces',(req, res)=>{

    let produces = []

    db.collection('produces')
    .find() //returns a cursor
    .sort({ name: 1 })
    .forEach(produce => produces.push(produce))
    .then(()=>{
        res.status(200).json(produces)
    })
    .catch(()=>{
        res.status(500).json({error: 'could not fetch the documents'})
    })
})
app.get('/messages', (req, res)=>{
    let messages = []
    db.collection('messages')
    .find()
    .forEach(message => messages.push(message))
    .then(()=>{
        res.status(200).json(messages)
    })
    .catch(()=>{
        res.status(500).json({error: 'could not fetch the documents'})
    })
})
app.get('/new',(req, res)=>{
    let newProduces = []
    db.collection('produces')
    .find({new: true})
    .forEach(produce => newProduces.push(produce))
    .then(()=>{
        res.status(200).json(newProduces)
    })
    .catch(()=>{
        res.status(500).json({error: 'could not fetch the documents'})
    })
})
app.get('/popular',(req, res)=>{
    let popularProduces = []
    db.collection('produces')
    .find({popular: true})
    .sort({name : 1})
    .forEach(produce => popularProduces.push(produce))
    .then(()=>{
        res.status(200).json(popularProduces)
    })
    .catch(()=>{
        res.status(500).json({error: 'could not fetch the documents'})
    })
})
app.get('/produces/:produce', (req,res)=>{
    db.collection('produces')
    .findOne({_id: ObjectId(req.params.produce)})
    .then((doc) =>{
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: 'could not fetch the document'})
    })
})
//hererererer
app.get('/produces/filter/:typep', (req,res)=>{
    let typeProduct = []
    db.collection('produces')
    .find({item: (req.params.typep)})
    .sort({ _id : 1})
    .forEach(produce => typeProduct.push(produce))
    .then(() =>{
        res.status(200).json(typeProduct)
    })
    .catch(err => {
        res.status(500).json({error: 'could not fetch the document'})
    })
})
app.get('/notifications',(req, res)=>{

    let notifications = []

    db.collection('notifications')
    .find() //returns a cursor
    // .sort({ popular: true })
    .forEach(note => notifications.push(note))
    .then(()=>{
        res.status(200).json(notifications)
    })
    .catch(()=>{
        res.status(500).json({error: 'could not fetch the documents'})
    })
})


app.get('/messages/:id', (req,res)=>{
    db.collection('messages')
    .findOne({_id: ObjectId(req.params.id)})
    .then(doc =>{
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: 'could not fetch the document'})
    })
})
app.post('/users', (req,res) =>{
    db.collection('users')
    .insertOne(req.body)
    .then(()=>{
        res.status(200).json({message: 'user added 🤪, log in to continue'})
    })
    .catch(err => {
        res.status(500).json({error: 'could not add the user'})
    })
})

app.post('/farmers', (req,res) =>{
    db.collection('farmers')
    .insertOne(req.body)
    .then(()=>{
        res.status(200).json({message: 'farmer added 🤪, log in to continue'})
    })
    .catch(err => {
        res.status(500).json({error: 'could not add the farmer'})
    })
})

