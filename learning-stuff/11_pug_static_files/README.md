# Serving static files in Express

## <a href="app.js">Serving html template using pug template engine with express js</a>

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
<br>
The function signature is:
<pre>express.static(root, [options])</pre>
The root argument specifies the root directory from which to serve static assets. For more information on the options argument, see express.static.

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:
<pre>
app.use('/static',express.static('static'))</pre>
/static --- path <br>
'static' folder name<br><br>
Now, you can load the files that are in the static directory:<br>
For loading index.js file :
<pre>
http://localhost/static/index.js</pre>
<br><br>

# What is template engine ?
<p>
A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.</p>
Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.
<br>
See <a href="https://github.com/expressjs/express/wiki#template-engines">Template Engines (Express wiki)</a> for a list of template engines you can use with Express. See also Comparing JavaScript Templating Engines: Jade, Mustache, Dust and More.
<br>

## Installing Pug
To render template files, set the following application setting properties, set in app.js in the default app created by the generator:
<br>
views, the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.<br>
view engine, the template engine to use. For example, to use the Pug template engine: app.set('view engine', 'pug').<br>
Then install the corresponding template engine npm package; for example to install Pug:
<pre>
$ npm install pug --save</pre>

After the view engine is set, you don’t have to specify the engine or load the template engine module in your app; Express loads the module internally, as shown below (for the above example).
<pre>
app.set('view engine', 'pug')</pre>




