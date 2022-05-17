const { MongoClient} = require('mongodb')
// const mongoose = require('mongoose')

let dbConnection;

module.exports = {
    connectToDb: (cb)=>{
        MongoClient.connect('mongodb://localhost:27017/globe-farmer')
        .then((client) =>{
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: ()=> dbConnection,
    // async connection() {
    //     try {
    //         const connectionParams = {
    //             useNewUrlParser: true,
    //             useCreateIndex: true,
    //             useUnifiedTopology: true,
    //         };
    //         await mongoose.connect('mongodb://localhost:27017/globe-farmer', connectionParams);
    //         console.log("connected to database");
    //     } catch (error) {
    //         console.log(error);
    //         console.log("could not connect to database");
    //     }
    // }
}