// Dependencies ---------------------
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var app = express();
var http = require('http').Server(app);


// Express -------------------------
app.use(bodyParser.urlencoded({
    limit: '10mb',
    parameterLimit: 100000,
    extended: false
}));


app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/app/public'));

//Routes ---------------------------
var api = require(__dirname + '/app/backend/api');
app.use('/api', api);

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/app/public/views/index.html');
});


// Start Server ---------------------
http.listen(config.port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('listening Port :', config.port);
    }
});