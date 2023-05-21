var express = require('express');
var router = express.Router();
var query = require("/Visual Studio Projects/ExpressProject/queryHandler");

router.get('/', async function(req, res, next){
    var sql = "SELECT * FROM bilder";
    var buffer = await query(sql);
    let data = JSON.parse(JSON.stringify(buffer));
    let test = data[0]["Beskrivning"];
    console.log(test);
});

module.exports = router;

//Få den här skiten to go, sen for loop för att lägga till bilder typ, potentiellt ska va i router
