# What is npm?
<ul>
<li>npm is the world's largest Software Registry.</li>
<li>The registry contains over 800,000 code packages.</li>
<li>Open-source developers use npm to share software.</li>
<li>Many organizations also use npm to manage private development.</li>
</ul>

## Installing npm
<hr>
<ul>
<li>npm is installed with Node.js</li>

<li>This means that you have to install Node.js to get npm installed on your computer.</li>
</ul>

## Software Package Manager

<hr>
<ul>
<li>The name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.</li>
<li>All npm packages are defined in files called package.json.</li>
<li>The content of package.json must be written in JSON.</li><li>At least two fields must be present in the definition file: name and version.</li>
</ul>
<pre>{
"name" : "foo",
"version" : "1.2.3",
"description" : "A package for fooing things",
"main" : "foo.js",
"keywords" : ["foo", "fool", "foolish"],
"author" : "John Doe",
"licence" : "ISC"
}</pre>

## Managing Dependencies
<hr>
npm can manage dependencies.
<br>
npm can (in one command line) install all the dependencies of a project.
<br>
Dependencies are also defined in package.json.
<hr>

# Install packages
<pre>npm install express</pre>
Install globally
<pre>npm install express --global</pre>
we can also install any package with this command
<pre>npm i nodemon</pre>
Check version of package
<pre>npm view express version</pre>

