var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"

});
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE Users (userID INT AUTO_INCREMENT PRIMARY KEY, userName VARCHAR(30), pass VARCHAR(30))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("user table created");
  });
  var sql = "CREATE TABLE beers (beerID INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30), type VARCHAR(30), rating int, price int, description VARCHAR(255), pictureFilePath VARCHAR(255))";
  //picture probably doesn't need to have length 255 but this accomodates for bad filepathing at least

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("beers table created");
  });
  var sql = "CREATE TABLE favorites (row INT AUTO_INCREMENT PRIMARY KEY, rating INT, beerID INT, userID INT, FOREIGN KEY (beerID) REFERENCES beers (beerID), FOREIGN KEY (userID) REFERENCES Users (userID))";
  //really this is just a review history but we can sort by rating in descending order, getting unique users is easy because we will store user ID#s
  //also lets us make use of AVG for average score
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("favorites table created");
  });
});
