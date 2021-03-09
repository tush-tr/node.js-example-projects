const express = require('express');

const app = express()
const port = 80;


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
})


app.post("/about",(req,res)=>{
    res.send("This is post request")
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});




