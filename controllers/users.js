const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getUserById = (req, res) => {
  let sql = "SELECT * FROM users WHERE id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const login = (req, res) => {
  const { username } = req.body;
  let sql = "SELECT * FROM users WHERE username = ?";
  sql = mysql.format(sql, [username]);

  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(results, err);
    return res.json({ message: `Login successful ${results.username}` });
  });
};

const createUser = (req, res) => {
  const {
    first_name,
    middle_name,
    last_name,
    date_of_birth,
    email,
    phone,
    username,
    password,
  } = req.body;
  let sql =
    "INSERT INTO users (first_name, middle_name, last_name, date_of_birth, email, phone, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    first_name,
    middle_name,
    last_name,
    date_of_birth,
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

const updateUserById = (req, res) => {
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
    "UPDATE users SET first_name = ?, middle_name = ?, last_name = ?, date_of_birth = ?, email = ?, phone = ?, username = ?, password = ? WHERE id = ?";
  sql = mysql.format(sql, [
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    email,
    phone,
    username,
    password,
    req.params.id,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteUserByUsername = (req, res) => {
  let sql = "DELETE FROM users WHERE username = ?";
  sql = mysql.format(sql, [req.params.username]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  login,
  createUser,
  updateUserById,
  deleteUserByUsername,
};
