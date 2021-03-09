// include modules
const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static_files')); // For serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine','pug'); // set the view engine as pug
app.set('views', path.join(__dirname,'views')); // set the views directory

//ENDPOINTS
app.get('/', (req,res)=>{
    res.status(200).render('index.pug');
});

app.post('/', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const adding = {warning:"Please enter correct password"};
    const pss = 12345678;
    if(password==pss){
        res.status(200).render('logged.pug');
    }
    else{
        res.status(200).render('index.pug',adding);
    }
});

//START THE SERVER
app.listen(port,()=>{
    console.log(`The application is running on the port ${port}`);
});
