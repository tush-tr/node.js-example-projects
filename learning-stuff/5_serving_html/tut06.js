const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('tut44.htm');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent)
});

server.listen(80,'127.0.0.1',()=>{
    console.log("listening on port 80");
})


