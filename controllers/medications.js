const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllMedications = (req, res) => {
  pool.query("SELECT * FROM medications", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getMedicationById = (req, res) => {
  let sql = "SELECT * FROM medication WHERE med_id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createMedication = (req, res) => {
  const { medId, medicationName, userId } = req.body;
  let sql =
    "INSERT INTO medications (med_id, medication_name, user_id) VALUES (?,?,?) ";
  sql = mysql.format(sql, [medId, medicationName, userId]);
  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newMedId: res.insertId });
  });
};

const updateMedicationById = (req, res) => {
  const { medicationName, medId } = req.body;
  let sql = "UPDATE medications SET medication_name = ? WHERE med_id = ?";
  sql = mysql.format(sql, [medicationName, medId]);
  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteMedicationById = (req, res) => {
  let sql = "DELETE FROM medications WHERE med_id = ?";
  sql = mysql.format(sql, [req.params.medId]);
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({
      message: `Deleted ${results.affectedRows} medication(s)`,
    });
  });
};

module.exports = {
  getAllMedications,
  getMedicationById,
  createMedication,
  updateMedicationById,
  deleteMedicationById,
};
