const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = () =>{
    mongoose.connect(mongoURI, {useNewUrlParser: true}, () => {
        console.log("Conneted to Mongo Succesfully");
    })
}

module.exports = connectToMongo;