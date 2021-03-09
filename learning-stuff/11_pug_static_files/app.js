const express = require('express');
const path = require("path");
const app = express();
const port = 80;

// Serving static files

app.use('/static',express.static('static'));

// Set the template engine pug
app.set('view engine','pug');


// set the views directory
app.set('views',path.join(__dirname,"template"));

// our pug demo end point
app.get("/demo",(req,res)=>{
    res.status(200).render('demo', { title: 'Hello Learners',
     message: 'We are making our first express app using pug template engine' ,
    second: 'This is second heading'});
});


// __________________________________________________________________

app.get("/",(req,res)=>{
    res.send("This is my first express app, And this is My home page");
});

app.get("/about",(req,res)=>{
    res.send("This is my first express app, And this is my about page");
});

app.get("/contact",(req,res)=>{
    res.send("This is my first express app and this is my contact page");
});

app.get("/this",(req,res)=>{
    res.status(404).send("This page is not available");
});


app.post("/about",(req,res)=>{
    res.send("This is post request")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});




