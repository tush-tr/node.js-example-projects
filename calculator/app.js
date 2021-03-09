const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/",(req,res)=>{   
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    res.send(`Result of the calculation: ${num1+num2}`);
})

app.get("/bmi-calculator",(req,res)=>{
    res.sendFile(__dirname + "/bmi.html");
})
app.post("/bmi-calculator",(req,res)=>{
    let weight = req.body.weight;
    let height = req.body.height;
    res.send(`Your BMI is ${weight/height*height}`);
})
app.listen(3000,()=>{
    console.log("Running");
})


