const express = require('express')
const {connectToDb, getDb, connection} = require('./db')
const { ObjectId } = require('mongodb')
const app = express()
const cors = require('cors');
const upload = require("./routes/upload");


app.use("/file", upload);
const corsOptions ={
    origin: 'http://localhost:8080',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}


app.use(cors(corsOptions));
app.use(express.json())

// connection()

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

app.get("/file/:filename", async (req, res) => {
    try {
        const file = await gfs.images.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send("not found");
    }
});
app.post('/file/:filename', async(req, res) =>{
    db.collection('images')
    try {
        const file = await gfs.images.insertOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send("not found");
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
app.get('/users/:id', (req,res)=>{
    db.collection('users')
    .findOne({_id: ObjectId(req.params.id)})
    .then(doc =>{
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: 'could not fetch the document'})
    })
})
app.get('/user/:phone/:password', (req,res)=>{
    db.collection('users')
    .findOne({phone: req.params.phone}, { password: req.params.password})
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
        res.status(200).json({message: 'user added 🤪'})
    })
    .catch(err => {
        res.status(500).json({error: 'could not add the user'})
    })
})
app.post('/produces', (res,req)=>{
    db.collection('produces')
    .insertOne(req.body)
    .then(()=>{
        res.status(201).json({message: 'posted'})
    })
    .catch(err=>{
        res.status(500).json({error: 'couldnt post the product' })
    })
})