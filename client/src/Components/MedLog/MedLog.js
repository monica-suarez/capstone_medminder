import React from "react";
import Header from "../Header";
import "../MedList/medlist.css";

const MedLog = () => {
  return (
    <div>
      <header className="page-header">
        <div>Dose Log</div>
      </header>
      <Header />
      <h1 className="alert-title">Doses Taken:</h1>
    </div>
  );
};

export default MedLog;
