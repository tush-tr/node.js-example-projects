const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');   // note here text/html 
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>forms</title>
  </head>
  <body>
      <h2> this is html form tutorial</h2>
  <form action="backend.php">
  <div>Name: <input type="text" name="myname">
  </div>
  <br>
  <div>Role: <input type="text" name="myrole">
  </div>
  <br>
  <div>Email: <input type="text" name="myemail">
  </div>
  <br>
  <div>date:<input type="date" name="Select DOB" id="">
  </div>
  <br>
  <div>Bonus:<input type="number" name="mybonus" id="">
  </div>
  <br>
  <div>are your eligible? <input type="checkbox" name="eligiblity" id="">
  </div>
  <br>
  <div>Gender: male
      <input type="radio" name="mygender" id="">
       Female <input type="radio" name="mygender" id="">
      </div>
  <br>
  <div><input type="submit" value="submit now"></div>
  <br>
  <div>Write about yourself: <br><textarea name="mytext" id="" cols="30" rows="10">    
  </textarea>
  </div>
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
  <div>
  <label for="car">Car</label>
  <select name="mycar" id="car">
      <option value="Indica">Indica</option>
      <option value="swift">swift</option>
  </select>
  </div>
  <br>
  
  </form>
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});