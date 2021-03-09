const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req, res) => {
    // const FirstName = req.body.fname;
    // const LastName = req.body.lname;
    // const Email = req.body.email;
    console.log(req.body);
    
});

app.listen(3000, () => {
    console.log("Server is running");
})


// api key
// 889b07e800a194c66b7a4a8a9fda94a4-us7

// list id
// 643a477445





// const data =
//     {
//         members: [
//             {
//                 email_address: Email,
//                 status: "Subscribed",
//                 merge_fields: {
//                     FNAME: FirstName,
//                     LNAME: LastName,
//                 }
//             }
//         ]
//     }






// const url = "https://us7.api.mailchimp.com/3.0/lists/643a477445/members";
//     const options = {
//         method: "POST",
//         auth: "tushar1:889b07e800a194c66b7a4a8a9fda94a4-us7",

//     }
//     const request = https.request(url, options, (res) => {
//         res.on("data", (data) => {
//             console.log(JSON.parse(data));
//         })
//     }) // for posting request

//     request.write(jsonData);
//     request.end();