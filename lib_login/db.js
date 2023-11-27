var mysql = require("mysql2");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "!dmsgur0327",
  database: "auth",
});
db.connect();

module.exports = db;
