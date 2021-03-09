const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

// Adding html files
const home = fs.readFileSync('index.htm');
const about = fs.readFileSync('about.htm');
const contact = fs.readFileSync('contact.htm');
const services = fs.readFileSync('services.htm');

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if(url == '/'){

    res.end(home);
  }
  else if(url == '/about'){
    res.end(about);
  }
  else if(url == '/services'){
    res.end(srvices)
  }
  else if(url == '/contact'){
    res.end(contact)
  }
  else{
    res.statusCode = 404;
    res.end("<h1>404 not found</h1>");
  }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });