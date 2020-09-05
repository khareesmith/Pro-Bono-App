var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static('index.html'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/services.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/services.html'));
});

app.get('/forum.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/forum.html'));
});

app.listen(9000);