const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const createUser = (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    email,
    phone,
    username,
    password,
  } = req.body;
  let sql =
    "INSERT INTO users (first_name, middle_name, last_name, date_of_birth, email, phone, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    email,
    phone,
    username,
    password,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = {
  createUser,
};
