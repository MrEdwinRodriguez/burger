var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sigma101',
    database: 'burgers_db'
});

// var connection = mysql.createConnection({
//     host: '	sp6xl8zoyvbumaa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: 'hbf4ejo0g0j9adkj',
//     password: 'sbz1ll52ytqtsozz',
//     database: 'burgers_db'
// });


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;