# Create Your Own Modules
## <a href="mod.js">Make a module with some functions</a>
## <a href="index.js">Use created module in the current javascript file</a>

You can create your own modules, and easily include them in your applications.<br>
The following example creates a module that returns a date and time object:<br>
Example<br>
Create a module that returns the current date and time:
<pre>exports.myDateTime = function () {
  return Date();
};</pre>
Use the <b>exports </b>keyword to make properties and methods available outside the module file.

## Include Your Own Module
Now you can include and use the module in any of your Node.js files.<br>
Example<br>
Use the module "myfirstmodule" in a Node.js file:
<pre>var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);</pre>
Notice that we use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.
<br>
Save the code above in a file called "demo_module.js", and initiate the file:<br>
Initiate demo_module.js:
<pre>
C:\Users\Your Name>node demo_module.js</pre>