const express = require('express');

const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(`${__dirname}/public`));

// set the home page route
app.get('/', (req, res) => {
  // ejs render automatically looks in the views folder
  res.render('index');
});

app.listen(port, () => {});
