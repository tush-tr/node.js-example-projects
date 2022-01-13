# Authentication in Nodejs, MongoDB
### why do we need to authenticate?
We're creating our website or web app for users to use then these users are going to start
generating data in the website.
They might like certain posts, they might interact with other users,
there might be messages created or recipes created.
There's always going to be some user data created. And in order to associate those pieces of data with
individual users, we need to create an account for each user so that they would sign up to our website
using a username and password and we would essentially create kind of like an ID card for them to
uniquely identify them on our database and to save all of the data that they generate onto that account.

### Authentication can be done in a number of ways.

there are a lot of topics like cookies and sessions, oauth, encryption, hashing.

## Make a secret keeping website like whisper
#### Structure of the website is going to be like this--
<li>Home Page
<li>Log In
<li>Resigter
<li>Secrets

### Packages we use
<li>body-parser
<li>express
<li>EJS
<li>Mongoose
<li>bcrypt
<li>mongoose-encryption


# Level 1 - Register Users with username and password
in order to do this we're going to be using Level 1 security,
so the lowest level possible of security for our website.

this is simply just going to be creating an account for the user, storing their email and password
in our database so that when they come back at a later date we can check their email against their password
and see if we should let them pass or not.
>Create a database collection for users in MongoDB

```Bash
$ npm i mongoose
```

#### Register the user 

```javascript
app.post("/register",(req, res) => {
        const newUser = new User({
            user: req.body.username,
            password: req.body.password
        })
        newUser.save((err) => {
            if (err) {
                console.log("Error in saving post request for register page");
            } else {
                res.render("secrets")
            }
        })
    })
```

#### Login the user
```javascript
app.post("/login",(req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        User.findOne({ user: username }, (err, foundUser) => {
            if (err) {
                console.log(err);
            }
            else {
                if (foundUser) {
                    if (foundUser.password === password) {
                        res.render("secrets");
                    }
                    else {
                        console.log("Password not match");
                    }
                }
                else {
                    console.log("--User Not Found");
                }
            }
        })
    })
```


# Level 2 of authentication - Encryption
## what exactly is encryption?
It is just scrambling something so that people can't tell what the original was unless they were in on the secret and they knew how to unscramble it.

### Caesar Cipher
One of the earliest ways of encrypting messages that we know about
is the Caesar cipher.
And this comes from Julius Caesar who was one of the generals in the Roman Empire and what he did is
he would send messages to his generals and he would encrypt it

Now in modern days and with modern cryptography this is overly simplistic and it's very very easy to crack.

But there are other forms of encryption which are a little bit more complicated and it involves a lot
more maths to make it more time consuming for somebody to crack.


>You have a way of scrambling your message and it requires a key to be able to unscramble that message.

### mongoose-encryption
The npm package that we're going to use is something called mongoose-encryption.
And if you take a look at the documentation it's basically a very simple encryption package that works with a mongoose.
<br>

>It uses an encryption algorithm called<b> AES </b>which is a relatively modern encryption algorithm
and it is far more secure than something like the Caesar cipher which is very very easy to break.

<li>Change the simple version of schema to new object type schema



```javascript
const encrypt = require('mongoose-encryption');
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
    // whatever else
});
```
Use encryption plugin with our schema
```javascript
userSchema.plugin(encrypt, {secret:secret });
```

#### Encrypt only certain fields
```javascript
userSchema.plugin(encrypt, {secret:secret,encryptedFields: ['password']});
```   

So we don't actually have to do anything else special in the register or the login sections because
the way that Mongoose encrypt works is that it will encrypt when you call save, and then it will decrypt
when you call find.

## What are environment variables?
An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. They are part of the environment in which a process runs.<br>
Environment variables are basically a very very simple file that we're going to keep certain sensitive
variables such as encryption keys and API keys.
For keeping our environmental variables we use dotenv module and keep our variables in a <b>.env </b>file.

Install dotenv module
```javascript
$ npm i dotenv
// Inside the file keep the varible like this---
// KEY = mykey
```
Create a .env file<br>
```Bash
$ touch .env
```
Import the package and load the file .env varibles into our code file
```javascript
require("dotenv").config();
```
We can also do this way if we want to set this if app is not on production
```javascript
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
```

To acces our environment variables we can use
```javascript
const myKey = process.env.KEY;
```

# Level 3- Hashing Password
A hash function is used to generate the new value according to a mathematical algorithm. The result of a hash function is known as a hash value or simply, a hash.

A good hash function uses a one-way hashing algorithm, or in other words, the hash cannot be converted back into the original key.

let's go ahead and install MD5, the package. And then all we need to do is
just you require it and then use it to Hash a particular message or in our case the password.

```Bash
$ npm i md5
```

Require the md5 module
 let's remove Mongoose encryption and remove this plugin from our user schema
and instead we're going to require "md5".

 when the user registers instead of saving their password which is what we got from the req.
body, we're going to use our Hash function, MD5, to turn that into a irreversible hash.
```javascript
.post((req, res) => {
        const newUser = new User({
            user: req.body.username,
            password: md5(req.body.password)
        })
```

cause of the way that hashing algorithms work you can't reverse this back into the
plain text of the original password.

# Introduction to hacking

check- <a href="https://plaintextoffenders.com/">https://plaintextoffenders.com/</a>

Hackers can decore and crack hashed password using hash tables so we should keep our passwords stronger.


# Salting and hashing passwords with bcrypt


The salt is something that the user doesn't have to remember.
And instead it's stored in the database along with the hash.
So that means when the user types in their password when they try to login, you combine their password
with the salt and if you generate the same hash then they must have had the same password.

### Why to add salt ?
 if we added a salt and we made it harder to generate a hash table, with some of the latest
GPUs, you can still probably generate a hash table with all salt combinations relatively quickly.


## What is bcrypt ?
This is one of the industry standard hashing algorithms that developers use to keep their users passwords
safe. 

Because while you can calculate 20 billion MD5 hashes per second,
even the latest and the greatest GPUs in 2019 can still calculate only about 17,000 bcrypt hashes
per second which makes it dramatically harder for a hacker to generate those pre compiled hash tables.


Now the package that we're going to be using to hash our passwords using bcrypt is also called bcrypt
and you can find the documentation for it as always on NPM.


### nvm
nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh


$ nvm install version-name
```


Now install the bcrypt package
```Bash
$ npm i bcrypt
```

Require the bcrypt module

```javascript
const bcrypt = require("bcrypt");
```

Define salt rounds
```javascript
const saltRounds = 10;
```
the more that you increase the number the harder your computer will also have
to work to generate those hashes.

to actually use
bcrypt,
we're going to use the hash function passing in the password that the user has typed in when they registered
and also the number of rounds of salting we want to do and bcrypt will automatically generate the random
salt and also hash our password with the number of salt rounds that we designed.

```javascript
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) =>{
    // Store hash in your password DB.
});
```

Now what about when the user tries to login?
So in our login route instead of using MD5 to rehash the password that they've put in we're
going to be using bcrypt.

And the way that they tell us to check our password is to use bcrypt.
compare and generate a hash using this line of code.

```javascript
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});
```

# What are cookies and sessions?

An HTTP cookie is a small piece of data stored on the user's computer by the web browser while browsing a website. Cookies were designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity.

 a session is a temporary and interactive information interchange between two or more communicating devices, or between a computer and user. A session is established at a certain point in time, and then ‘torn down’ - brought to an end - at some later point.


### Using passport.js to add cookies and sessions

#### packages to Add cookies and sessions

npm install 
>passport

>passport-local

>passport-local-mongoose

>express-session NOT express-sessions

after installing express session we can use some of code from documentation


## Third party OAuth2.0




