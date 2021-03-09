const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const upload = require('./uploadmiddleware');
const path = require('path');
const Resize = require('./resize');

const port = process.env.PORT || 3500;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index")
})
app.post('/', upload.single('image'), async function (req, res) {
    const imagePath = path.join(__dirname, '/public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
        res.status(401).json({ error: 'Please provide an image' });
    }
    const filename = await fileUpload.save(req.file.buffer);
    return res.status(200).json({ name: filename });
});

app.listen(port, function () {
    console.log('Server is running on PORT', port);
});