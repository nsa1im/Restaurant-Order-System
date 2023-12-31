const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const fs = require('fs');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const { v4: uuidv4 } = require('uuid');

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (request, response) {
  response.render('home');
});

app.get('/home', function (request, response) {
  response.redirect('/');
});

app.get('/menu', function (request, response) {
  response.render('menu');
});

app.get('/contact', function (request, response) {
  response.render('contact');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});