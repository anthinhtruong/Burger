var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
})

connection.connect(function(error){
    if(error)throw error;
    console.log("connected as id: " + connection.threadId)
})

module.exports = connection;