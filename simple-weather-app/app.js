const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true }))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");  
})

app.post("/",(req,res)=>{
    const query = req.body.cityName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=b2b8f013cb2d1da62f710e50287d5e7d&units=metric`;
    https.get(url,(apiresponce)=>{
        apiresponce.on('data', (data) => {
            const wdata = JSON.parse(data);
            const temp = wdata.main.temp;
            const desc = wdata.weather[0].description;
            const icon = wdata.weather[0].icon;
            const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            res.write(`<p>${desc}</p>`)
            res.write(`<h1>Weather in ${query} is: ${temp} degrees</h1>`);
            res.write(`<img src="${imageUrl}">`)
            res.send();
          });
    });
})
app.listen(3000,()=>{
    console.log("Server is running");
})