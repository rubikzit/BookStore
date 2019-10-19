const conn = require("./connect");
var sql = "SELECT books.*  FROM books ";
conn.query(sql, function (err, result, fields) {
  if (err) {
    console.log("error", err)
  } else {
    console.log("success", result)
  }
});


