// Synchronous or blocking-----
// --Line by line execution
const fs = require("fs")
fs.readFile("exm.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is a message");
// Asynchronous or non-blocking
// --Line by line execution not guaranteed
// --callbacks will fire