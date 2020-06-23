const express = require('express');
const mongoose  = require('mongoose')
const app = express();
const PORT = 3001;

const {MONGOURI} = require('./keys');

// const MONGODB_URI = 'mongodb+srv://test:YCK2hDmA0ZV2v3I0@cluster0-ghxns.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('error', (err)=>{
    console.log('error connecting', err);    
})
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongo atlas browww');    
})
require('./models/user');
//using x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./routes/auth'))


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})