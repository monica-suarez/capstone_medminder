import React from "react";
import Header from "../Header";
import "../MedList/medlist.css";

const HomePage = () => {
  return (
    <div>
      <header className="page-header">
        <div>Medication Alerts</div>
      </header>
      <Header />
      <h1 className="alert-title">Current Alerts:</h1>
    </div>
  );
};

export default HomePage;
