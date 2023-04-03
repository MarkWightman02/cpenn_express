
const express = require('express');


const app = express();


const port = 1337;

const dir = __dirname;

// Define routes to serve static files
app.get('/', function(req, res) {
  res.sendFile(dir + '/public/index.html');
});

app.get('/contact', function(req, res) {
  res.sendFile(dir +  '/public/contact.html');
});


app.get('/about', function(req, res) {
  res.sendFile(dir + '/public/about.html');
});

app.get('/services', function(req, res) {
  res.sendFile(dir + '/public/services.html');
});

app.get('/404', function(req, res) {
  res.sendFile(dir + '/public/404.html');
});

app.get('/images/about.jpeg', function(req, res) {
  res.sendFile(dir + '/public/images/about.jpeg');
});

app.get('/images/contact.jpg', function(req, res) {
  res.sendFile(dir + '/public/images/contact.jpg');
});

app.get('/images/service.jpg', function(req, res) {
  res.sendFile(dir + '/public/images/service.jpg');
});

app.get('/images/logo.png', function(req, res) {
  res.sendFile(dir + '/public/images/logo.png');
});

app.get('/style/style.css', function(req, res) {
  res.sendFile(dir + '/public/style/style.css');
});

app.get("/*", function(req, res) {
  res.sendFile(dir + '/public/404.html');
});

// Start the server
app.listen(port, function() {
  console.log(`Server running at http://localhost:${port}`);
});
