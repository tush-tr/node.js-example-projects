// include modules
const express = require("express");
const path = require("path");
const fs = require('fs');
// const pug = require("pug");

const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static_files')); // For serving static files
app.use(express.urlencoded());



//PUG SPECIFIC STUFF
app.set('view engine','pug'); // set the view engine as pug
app.set('views', path.join(__dirname,'views')); // set the views directory


// ENDPOINTS
app.get('/', (req,res)=>{
    const con = "This is the content"
    const params = {title: 'this is swag',content: con,button_name: 'click here'};
    res.status(200).render('index.pug',params);
});
app.post('/',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
    const more = req.body.more;
    let outputstring = `the name of the client is ${name}, \nage of the client is ${age},\n gender: ${gender},\n address: ${address},\nmore about client: ${more}`;

    fs.writeFileSync('output.txt', outputstring);
    const par = {'message':'Your form has been submitted successfully'};
    res.status(200).render('index.pug',par);
    
})



//START THE SERVER
app.listen(port,()=>{
    console.log(`The application is running on the port ${port}`);
});

