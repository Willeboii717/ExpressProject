var express = require('express');
var router = express.Router();
var db = require("/Visual Studio Projects/ExpressProject/queryHandler");

router.get('/searchbar', async function(req, res, next) {
    var search = req.query.someName;  

    console.log("Get Req = " + search);
    var sql = "CALL searchImagebyCategory(?)";
    buffer = await db(sql, search);
    let data = (JSON.stringify(buffer)) ;
    data = JSON.parse(data); /*
    for (var i = 0; i<data.length; i++) {
        var slot = [];
        console.log("Data: " + data[0][i]);
        slot[i] = data[0][i];
        console.log("Slot: " + slot[i]);
    }
    if (slot?.["Titel"] != undefined) {
        res.render('index', {
                array: 
                slot[
                "test1",
                "test2" ],
                test: "hello"
        });
    }
    else {
        res.render('index', {test: "Inget Resultat"});
    }
    */
   res.render('index', {array: slot = ["test1", "test2", "test3", "test4", "test5", "test6"]});
});

module.exports = router;

//Skicka array av SQL resultat
//Kolla om det finns ett värde
//Sätt in värdet