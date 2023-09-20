var express = require('express');
var router = express.Router();
var db = require("/Visual Studio Projects/ExpressProject/queryHandler");

router.get('/searchbar', async function(req, res, next) {
    var search = req.query.q;  

    var sql = "CALL searchImagebyCategory(?)";
    buffer = await db(sql, search);
    let data = JSON.parse(JSON.stringify(buffer));
    var slot = [];
    for (var i = 0; i<data.length; i++) {
        slot[i] = data[0][i]?.["imageAbsolutePath"];
    }
    res.render('indexWithResults', {image: slot});
});
module.exports = router;

//Skicka array av SQL resultat
//Kolla om det finns ett värde
//Sätt in värdet