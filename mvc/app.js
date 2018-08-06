var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var employees = require('./routes/employees');
var app = express();
var mysql = require('mysql');

//database connection
app.use(function (req,res,next) {
    res.locals.connection = mysql.createConnection ({
        host:'satvimdbinstance.ceskwypdqmh8.us-east-2.rds.amazonaws.com',
        user:'satvim',
        password:'welcome1',
        database:'employeedb'
    });
    res.locals.connection.connect();
    console.log("Connection Successful!!!");
    next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', employees);
app.use('/employees', employees);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
});

app.set('view engine', 'jade');

module.exports = app;