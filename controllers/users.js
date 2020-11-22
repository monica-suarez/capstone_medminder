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

// const createUser = (req, res) => {
//   let sql =
//     "INSERT INTO ?? (??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
//   let user = req.body;
//   const first_name = user.first_name;
//   const middle_name = user.middle_name;
//   const last_name = user.last_name;
//   const date_of_birth = user.date_of_birth;
//   const email = user.email;
//   const phone = user.phone;
//   const username = user.username;
//   const password = user.password;
//   sql = mysql.format(sql, [
//     "users",
//     "first_name",
//     "middle_name",
//     "last_name",
//     "date_of_birth",
//     "email",
//     "phone",
//     "username",
//     "password",
//     first_name,
//     middle_name,
//     last_name,
//     date_of_birth,
//     email,
//     phone,
//     username,
//     password,
//   ]);
//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err);
//     return res.json({ newUser: results.insertId });
//   });
// };

// const createUser = (req, res) => {
//   const {
//     firstName,
//     middleName,
//     lastName,
//     dateOfBirth,
//     email,
//     phone,
//     username,
//     password,
//   } = req.body;
//   let sql =
//     "INSERT INTO users (first_name, middle_name, last_name, date_of_birth, email, phone, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
//   sql = mysql.format(sql, [
//     firstName,
//     middleName,
//     lastName,
//     dateOfBirth,
//     email,
//     phone,
//     username,
//     password,
//   ]);
//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err);
//     return res.json({ newId: results.insertId });
//   });
// };

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
  createUser,
  updateUserById,
  deleteUserByUsername,
};
