var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var fs = require("fs");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//Egna Modulervar query = require("./queryHandler");
/*
app.get('/', function(req, res){
  console.log("Search started");
  //console.log('id: ' + req.query.id);
  res.send("Hello");
});
*/



var indexRouter = require('./routes/index');
var specificViewRouter = require('./routes/specificView');
//var getShitRouter = require('./routes/getShit')


var a = ['/index'];
app.use(a, indexRouter);
app.use('/getShit', indexRouter);
app.use('/specificView', specificViewRouter);
//app.use('/getShit', getShitRouter);



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
