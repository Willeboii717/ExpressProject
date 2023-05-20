var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  var test = await req.baseUrl;
  console.log('id: ' + test);
  res.render('index', { layout: 'index' });
});


module.exports = router;
