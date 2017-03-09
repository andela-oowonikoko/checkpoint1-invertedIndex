const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/stylesheet.css'));

app.get('/', function (req, res) {
  console.log(req.url);
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/functions', function (req, res) {
  console.log(req.url);
  res.sendFile(path.join(__dirname + '/functions.html'));
});

app.listen(3000, function () {
  console.log('Server running on port 3000');
});
