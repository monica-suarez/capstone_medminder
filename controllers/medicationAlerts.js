const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllMedAlerts = (req, res) => {
  pool.query("SELECT * FROM medication_alerts", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getMedAlertById = (req, res) => {
  let sql = "SELECT * FROM medication_alerts WHERE alert_id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createMedAlert = (req, res) => {
  const { alertId, alert } = req.body;
  let sql = "INSERT INTO medication_alerts (alert_id, alert) VALUES (?, ?)";
  sql = mysql.format(sql, [alertId, alert]);
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newMedId: results.insertId });
  });
};

const updateMedAlertById = (req, res) => {
  const { alert, alertId } = req.body;
  let sql = "UPDATE medication_alerts SET alert = ? where alert_id = ?";
  sql = mysql.format(sql, [alert, alertId]);
  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteAlertById = (req, res) => {
  let sql = "DELETE FROM medication_alerts WHERE alert_id = ?";
  sql = mysql.format(sql, [req.params.alertId]);
  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${res.affectedRows} alerts(s)` });
  });
};

module.exports = {
  getAllMedAlerts,
  getMedAlertById,
  createMedAlert,
  updateMedAlertById,
  deleteAlertById,
};
