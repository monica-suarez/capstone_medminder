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
  let sql = "SELECT * FROM medications WHERE med_id = ?";
  sql = mysql.format(sql, [req.params.med_id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createMedication = (req, res) => {
  const { medicationName } = req.body;
  let sql = "INSERT INTO medications (medication_name) VALUES (?) ";
  sql = mysql.format(sql, [medicationName]);
  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(results, err);
    return res.json({ newMedId: results.insertId });
  });
};

// const createMedication = (req, res) =>{
//   const {medicationName} = req.body;
//   let sql = "INSERT INTO medications (medication_name, user_id) VALUES (?, (SELECT id FROM users WHERE id = ?))"
//   sql = mysql.format(sql, [medicationName, req.params.id]);
//   pool.query(sql, (err, res) => {
//     if (err) return handleSQLError(res, err);
//     return res.json({ newMedId: res.insertId });
//   });
// };

const updateMedicationById = (req, res) => {
  const { medicationName, medId } = req.body;
  let sql = "UPDATE medications SET medication_name = ? WHERE med_id = ?";
  sql = mysql.format(sql, [medicationName, medId]);
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteMedicationById = (req, res) => {
  let sql = "DELETE FROM medications WHERE med_id = ?";
  sql = mysql.format(sql, [req.params.id]);
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(results, err);
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
