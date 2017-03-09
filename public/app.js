const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  console.log(req.url);
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/functions', function (req, res) {
  console.log(req.url);
  res.sendFile('/functions.html');
});

app.listen(port, function () {
  console.log('Server running on ' + port);
});
