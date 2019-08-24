var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send('Welcome to Apikasi Cegah Dobel!')
})

app.use(function logger(req, res, next) {
    console.log('\x1b[33m%s\x1b[0m', "HTTP => " + new Date().toDateString() + " " + new Date().toLocaleTimeString(), req.method, req.url, req.body, req.query);
    next();
});

app.use(function(req, res, next) {
    //menghilangkan OPTION
    if (req.method === 'OPTIONS') {
        //console.log('!OPTIONS');
        var headers = {};
        // IE8 does not allow domains to be specified, just the *
        // headers["Access-Control-Allow-Origin"] = req.headers.origin;
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = false;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Authorization";
        res.writeHead(200, headers);
        res.end();
    } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Access-Control-Allow-Headers, Accept, Authorization");
        next();
    }
});

app.use('/rtes', require('./resources/rtes'));

app.listen(4000, function() {
    console.log('Jalan di Port :4000');
});