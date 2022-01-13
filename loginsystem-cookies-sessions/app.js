//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs"); // template engine
const mongoose = require("mongoose");
const session = require("express-session");
const res = require("express/lib/response");
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")


const app = express();
const port = 3000;

// TODO: Express specific stuff
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Express Session
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());



//MongoDB specific stuff
mongoose.connect(`mongodb://127.0.0.1:27017/users?directConnection=true&serverSelectionTimeoutMS=2000`, { useNewUrlParser: true });
const userSchema = new mongoose.Schema({
    user: String,
    password: String
})
// use passport mongoose
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());





// Our Routes

app.get("/", (req, res) => {
    res.render("home");
})

app.route("/register")
    .get((req, res) => {
        res.render("register")
    })
    .post((req, res) => {
        User.register({ username: req.body.username }, req.body.password, function (err, user) {
            if (err) {
                console.log(err)
                res.redirect("/register")
            }
            else {
                passport.authenticate("local")(req, res, () => {
                    res.redirect("/secrets")
                })
            }
        });
    })

app.route("/login")
    .get((req, res) => {
        res.render("login")
    })
    .post((req, res) => {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        })

        req.login(user,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                passport.authenticate("local")
            }
        })
    })



app.route("/logout").get((req, res) => {
    res.redirect("/")
})

app.route("/secrets").get((req,res)=>{
    if(req.isAuthenticated()){
        res.render("secrets");
    }
    else{
        res.redirect("/login")
    }
})

app.listen(port, () => {
    console.log("Server is running");
})