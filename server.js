// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const multer  = require('multer'),
      upload = multer({ dest: 'uploads/' })

app.use(express.static('public'));
app.set('view engine', 'pug')
app.get("/", function (request, response) {
  response.render('index');
});

app.post('/upload', upload.single('target'), function (req, res, next) {
  res.json({size: req.file.size})
})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
