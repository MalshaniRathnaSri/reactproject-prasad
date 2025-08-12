const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://malshanirathnasri:RsdxHFyopXz9bu9i@cluster0.pbbitb7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('connected to mongo DB');
    }
    catch(error){
        console.log('Error to connect Mongo DB')
    }
};
connect();

const serve = app.listen(port, host, () => {
    console.log(`Node server is listening to ${serve.address().port}`)
});

app.use('/api',router)

