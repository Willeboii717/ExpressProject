var express = require('express');
var router = express.Router();
var db = require("/Visual Studio Projects/ExpressProject/queryHandler");

router.get('/', async function(req, res, next) {
  var image = getLastPartOfUrl(req, res);
  var sqlQ = "CALL getSpecificImage(?)";
  buffer = await db(sqlQ, image);
  //res.send(buffer[0][0]?.["Beskrivning"]);
  res.render('specificView', {
    titel: buffer[0][0]?.["Titel"],
    fotograf: buffer[0][0]?.["Fotograf"],
    image: buffer[0][0]?.["imageAbsolutePath"],
    price: buffer[0][0]?.["Pris"],
    description: buffer[0][0]?.["Beskrivning"]}
    );
});

function getLastPartOfUrl(req, res) {
  var log = req.baseUrl;
  log = log.split("/");
  let lastElement = "/" + log[log.length - 1];
  return lastElement;
}

module.exports = router;

//Get URL image
//SP to get info
//Place info in correct places