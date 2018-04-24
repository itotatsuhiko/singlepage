var db_config = require('../../config/db.json');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : db_config.host,
    user    : db_config.user,
    password: db_config.password,
    database: db_config.database
});


module.exports = connection;