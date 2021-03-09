const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// TODO: Connect mongoose to Mongodb and set model
//Connect Mongoose to MongoDB server
mongoose.connect("mongodb://127.0.0.1:27017/blogdb", { useNewUrlParser: true });
// Create mongoose Schema
const articleSchema = {
    title: String,
    content: String
}
// Create mongoose model
const Article = mongoose.model("Article", articleSchema);

//____________________________ Request Targetting all articles______________________

app.route("/articles")
.get((req, res) => {
    Article.find((err, foundArticles) => {
        if (!err) {
            res.send(foundArticles);
        }
        else {
            console.log(err);
        }
    })
})
.post((req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    })
    newArticle.save((err) => {
        if (!err) {
            res.send("Sucessful Saved new Article");
        }
        else {
            res.send("error");
        }
    });
})
.delete((req, res) => {
    Article.deleteMany((err) => {
        if (!err) {
            res.send("Successfully Deleted")
        }
        else {
            res.send("Error!");
        }
    })
})



//____________________________Request Targetting specific articles__________________

app.route("/articles/:articleTitle")
// Get a specific value
.get((req,res)=>{
    const articleRequested = req.params.articleTitle;
    Article.findOne({title: articleRequested },(err,findedArticle)=>{
        if(!err){
            res.send(findedArticle);
        }
        else{
            res.send("Error!");
        }
    });
})
// put a specific value
.put((req,res)=>{
    const articleRequested = req.params.articleTitle;
    Article.update(
        {title: articleRequested },
        {title:req.body.title,content: req.body.content},        
        {overwrite: true},
        (err)=>{
            if(!err){
                res.send("Successfully Updated");
            }
            else{
                res.send("Error!");
            }
        }
    )
})
// Patch a specific article
.patch((req,res)=>{
    const articleRequested = req.params.articleTitle;
    Article.update(
        {title: articleRequested},
        // {$set: {title: "Chuck", content: " ee"}}
        {$set: req.body},
        (err)=>{
            if(!err){
                res.send("Successfully updated article");
            }
            else{
                res.send(err);
            }
        }

    )
})
.delete((req,res)=>{
    const articleRequested = req.params.articleTitle;
    Article.deleteOne({title: articleRequested},(err)=>{
        if(!err){
            res.send("Successfully deleted");
        }
        else{
            res.send(err);
        }
    })
})

// TODO: Start the server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});