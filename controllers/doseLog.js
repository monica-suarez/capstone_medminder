const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllDoses = (req, res) => {
  pool.query("SELECT * FROM dose_log", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getDoseLogById = (req, res) => {
  let sql = "SELECT * FROM dose_log WHERE dose_id = ?";
  sql = mysql.format(sql, [req.params.dose_id]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

getDoseTimeByDoseTime = (req, res) => {
  const { doseTime } = req.body;
  let sql =
    "SELECT TIME_FORMAT(dose_time, %h %i %p) from dose_log WHERE dose_time = ?";
  sql = mysql.format(sql, doseTime);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createDoseLog = (req, res) => {
  const { doseId, doseTime } = req.body;
  let sql = "INSERT INTO dose_log (dose_id, dose_time) VALUES (?, ?)";
  sql = mysql.format(sql, [doseId, doseTime]);
  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(results, err);
    return res.json({ newDoseId: results.insertId });
  });
};

const deleteDoseLogById = (req, res) => {
  let sql = "DELETE FROM dose_log WHERE dose_id = ?";
  sql = mysql.format(sql, [req.params.doseId]);
  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(results, err);
    return res.json({ message: `Deleted ${results.affectedRows} dose(s)` });
  });
};

module.exports = {
  getAllDoses,
  getDoseLogById,
  getDoseTimeByDoseTime,
  createDoseLog,
  deleteDoseLogById,
};
