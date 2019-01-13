const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: 'mrodriguezg.000webhostapp.com',
    database: 'id8420784_android',
    user: 'id8420784_mrodriguezg',
    password: '12345'
});

// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     database: 'id8420784_android',
//     user: 'root',
//     password: '12345'
// });

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("DB connected");
    }
});



module.exports = mysqlConnection;