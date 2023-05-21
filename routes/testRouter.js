var express = require('express');
var router = express.Router();
var db = require("/Visual Studio Projects/ExpressProject/queryHandler");

router.get('/searchbar', async function(req, res, next) {
    var search = req.query.someName;  

    console.log("Get Req = " + search);
    var sql = "CALL searchImagebyCategory(?)";
    buffer = await db(sql, search);
    let data = (JSON.stringify(buffer)) ;
    data = JSON.parse(data);
    for (var i = 0; i<data.length; i++) {
        var slot = data[0][i];
        if (slot?.["Titel"] != undefined) {
            res.render('index', {image1: slot["Titel"]});
        }
        else {
            res.render('index', {image1: "Inget Resultat"});
        }
    }
});

module.exports = router;

//Sätt in data i Jade variabel
//Sätt in data i länk