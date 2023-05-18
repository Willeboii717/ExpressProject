function main() {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "bothniabladet"
        /* Behöver köra 
            ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; flush privileges;
            I DB för att fungera
        */
    })
    
    connection.connect((err) => {
        if (err) {
        console.log(err)
        return
        }
        console.log('Database connected')
    })

    connection.query("SELECT * FROM kund", function(err, result, fields) {
        console.log(result);
    });
}
module.exports = {main};

