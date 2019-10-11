const mysql = require('mysql');

var conn = mysql.createConnection({
  host    : "localhost",
  user    : "root",
  password: "",
  database: "bookstore",
});

conn.connect(function (err) {
  if (err){
    console.log("that bai");
  };
  
  console.log('ket noi thanh cong');
});