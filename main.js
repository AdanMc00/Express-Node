var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  console.log(res.send('hello world'));
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
  });
  