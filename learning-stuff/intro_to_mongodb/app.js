const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/newkart', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
  //  // we're connected!
//     console.log("We are connected to mongodb successfully");


// });

const kittySchema = new mongoose.Schema({
    name: String,
    post: String,
    experience: Number

});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    const greeting = "My name is"+this.name;
    console.log(greeting);
  }

const Kitten = mongoose.model('kitten',kittySchema);

const mydoc = new Kitten({ name: 'Tushar Rajput',post:'node js developer',experience: 0 });
// console.log(mydoc.name);
// console.log(mydoc.post); 
// mydoc.speak();
const newdoc = new Kitten({name:'Rahul',post:'HTML Expert',experience:2});
//____ TO SAVE DATA TO MONGODB

// mydoc.save(function (err, mydoc) {
//     if (err) return console.error(err);
//     mydoc.speak();
//   });
// newdoc.save(function (err,doc){
//     if(err) return console.error(err);
//     doc.speak();
// } )
Kitten.find({post:'HTML Expert'},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })