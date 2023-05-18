var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



const mysql = require('mysql');
var fs = require("fs");

var indexRouter = require('./routes/index');
var specificViewRouter = require('./routes/specificView');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var db = require("./dbConn");
app.use(db.fuck);

app.get('/getShit', function(req, res, next){
  console.log("Checkpoint Post");
  console.log(db.fuck());

  //var data = JSON.stringify(result)
  //res.render('specificView', {variable: data});
});



app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/specificView', specificViewRouter);
app.use('/getShit', specificViewRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;
