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
    var slot = [];
    for (var i = 0; i<data.length; i++) {
        //console.log("Data: " + data[0][i]);
        slot[i] = data[0][i]?.["Titel"];
        console.log("Sätter in värde " + slot[i]);
    }
    var noResult = ["Inget Resultat"];
    if (slot[0] != undefined) {
        res.render('index', {image: slot});
    }
    
    else {
        res.render('index', {noResult: noResult});
    }
    
});

module.exports = router;

//Skicka array av SQL resultat
//Kolla om det finns ett värde
//Sätt in värdet