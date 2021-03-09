// ADDING Modules
const express = require('express');
const path = require("path");

// Specify port
const port = 80;

// EXPRESS SPECIFIC STUFF
const app = express();
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());

// TEMPLATE ENGINE SPECIFIC STUFF
app.set('view engine', 'jsx'); // set the view engine as jsx
app.set('views', path.join(__dirname,'/views')); // set the views directory
app.engine('jsx', require('express-react-views').createEngine());

// ENDPOINTS
// app.get('/', require('./routes').index);

app.get('/', (req,res)=>{
    const params = {name: 'I am Tushar',title: 'Hello World'}
    res.status(200).render('index',params);
});

//START THE SERVER
app.listen(port,()=>{
    console.log(`The application is running on the port ${port}`);
});
