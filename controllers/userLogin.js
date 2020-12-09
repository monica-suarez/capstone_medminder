// const mysql = require("mysql");
// const pool = require("../sql/connection");
// const { handleSQLError } = require("../sql/error");

// const getUserLoginByUsername = (req, res) => {
//   let sql = "SELECT * FROM users WHERE username = ?";
//   sql = mysql.format(sql, [req.params.username]);

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     if (!rows.length) return res.status(404).send("No matching users");
//   });
// };

// module.export = getUserLoginByUsername;
// const login = (req, res) => {
//   const { username } = req.body;
//   let sql = "SELECT * FROM users WHERE username = ?";
//   sql = mysql.format(sql, [username]);

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

// module.export = login;
