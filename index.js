var express = require('express');
var bodyParser = require('body-parser');


var app = express()

app.get('/',function(req,res){
    res.send('hello world');
});

app.listen(3000)
