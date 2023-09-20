var db = require("./dbConn");

module.exports = function sqlQuestion (question, test) {
return new Promise((resolve, reject) => {
        db.query(question, test, (err, result, fields) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(result);
        }
        });
    });
}