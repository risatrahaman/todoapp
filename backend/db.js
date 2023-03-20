const mysql = require("mysql");

const pool = mysql.createPool({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "todo"
});

module.exports = pool;