var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
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



//Egna Moduler
//var query = require("./queryHandler");

app.get("/index?q=", function(req, res){
  console.log("Search started");
  console.log('id: ' + req.query.id);
  next();
});

/*
app.get('/getShit', async function(req, res, next){
  var q = "SELECT * FROM bilder";
  var buffer = await query(q);
  let data = JSON.parse(JSON.stringify(buffer));
  let test = data[0]["Beskrivning"];
  console.log(test);
  res.render('specificView', {variable: test});
});
*/

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
