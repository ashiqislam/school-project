var mysql = require('mysql');
var queryBuild = require('querystring');
var webQuery = querystring.parse('beer=beerID&user=userID');
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hx$_yab@i#3ZM2^1_G=t!6eXT",
  database: "mydb"

});

db.connect(function(err) {
  if (err) throw err;
  db.query("SELECT AVG(rating) AS AveragePrice FROM favorites WHERE beerID = webQuery.beerID", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
db.connect(function(err) {
  if (err) throw err;
  db.query("SELECT  FROM favorites WHERE userID = webQuery.userID", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM beers ORDER BY name DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM beers ORDER BY rating DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
