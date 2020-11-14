import React from "react";
import Header from "../Header";
import "../MedList/medlist.css";

const PersonalInfo = () => {
  return (
    <div>
      <header className="page-header">
        <div>Personal Profile</div>
      </header>
      <Header />
      <h1 className="alert-title">Edit/Delete Profile:</h1>
    </div>
  );
};

export default PersonalInfo;
