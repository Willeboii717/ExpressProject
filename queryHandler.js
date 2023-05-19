var db = require("./dbConn");

module.exports = function sqlQuestion (question) {
return new Promise((resolve, reject) => {
        db.query(question, (err, result) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(result);
        }
        });
    });
}