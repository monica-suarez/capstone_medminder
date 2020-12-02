import http from "../http-common";

const getAllUsers = () => {
  return http.get("/users");
};

const getUserById = (id) => {
  return http.get(`/users/${id}`);
};

const login = (username) => {
  return http.get(`/users?username=${username}`);
};

const createUser = (data) => {
  return http.post("/users", data);
};

const updateUserById = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const deleteUserById = (id) => {
  return http.delete(`/users/${id}`);
};

const getAllMedications = () => {
  return http.get("/medications");
};

const getMedicationById = (med_id) => {
  return http.get(`/medications/${med_id}`);
};

const createMedication = (data) => {
  return http.post("/medications", data);
};

const updateMedicationById = (med_id, data) => {
  return http.put(`/medications/${med_id}`, data);
};

const deleteMedicationById = (med_id) => {
  return http.delete(`/medications/${med_id}`);
};

const getAllMedAlerts = () => {
  return http.get(`/med_alerts`);
};

const getMedAlertById = (alert_id) => {
  return http.get(`/med_alerts/${alert_id}`);
};

//time is formatted here HH(12) MM AM/PM
const getMedAlertTimeByAlert = (alert) => {
  return http.get(`/med_alerts?alert=${alert}`);
};

const createMedAlert = (data) => {
  return http.post("/med_alerts", data);
};

const updateMedAlertById = (alert_id, data) => {
  return http.put(`/med_alerts/${alert_id}`, data);
};

const deleteMedAlertById = (alert_id) => {
  return http.delete(`/med_alerts/${alert_id}`);
};

const getAllDoses = () => {
  return http.get("/dose_log");
};

const getDoseLogById = (dose_id) => {
  return http.get(`/dose_log/${dose_id}`);
};

const getDoseTimeByDoseTime = (dose_time) => {
  return http.get(`/dose_log?dose_time=${dose_time}`);
};

const createDoseLog = (data) => {
  return http.post("/dose_log", data);
};

const deleteDoseLogById = (dose_id) => {
  return http.delete(`/dose_log/${dose_id}`);
};

export default {
  getAllUsers,
  getUserById,
  login,
  createUser,
  updateUserById,
  deleteUserById,
  getAllMedications,
  getMedicationById,
  createMedication,
  updateMedicationById,
  deleteMedicationById,
  getAllMedAlerts,
  getMedAlertById,
  getMedAlertTimeByAlert,
  createMedAlert,
  updateMedAlertById,
  deleteMedAlertById,
  getAllDoses,
  getDoseLogById,
  getDoseTimeByDoseTime,
  createDoseLog,
  deleteDoseLogById,
};
