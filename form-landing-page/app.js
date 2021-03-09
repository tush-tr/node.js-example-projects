// include modules
const express = require("express");
const path = require("path");
// const fs = require('fs');
const bodyparser = require("body-parser");
const app = express();
const port = 80;

// _______MONGOOSE______
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dancecontactform', { useNewUrlParser: true, useUnifiedTopology: true });

// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    address: String,
    more: String
});

const Contact = mongoose.model('contact',contactSchema);


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());


//PUG SPECIFIC STUFF
app.set('view engine','pug'); // set the view engine as pug
app.set('views', path.join(__dirname,'views')); // set the views directory


// ENDPOINTS
app.get('/', (req,res)=>{
    // const params = {};
    res.status(200).render('home.pug');
});

app.get('/contact', (req,res)=>{
    // const params = {};
    res.status(200).render('contact.pug');
});
app.post('/contact', (req,res)=>{
    const mydata = new Contact(req.body);
    mydata.save().then(()=>{
        res.send("your message has been sent");
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database");
    });
});

//START THE SERVER
app.listen(port,()=>{
    console.log(`The application is running on the port ${port}`);
});





