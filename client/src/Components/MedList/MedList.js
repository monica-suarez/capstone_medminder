import React from "react";
// import { Box, Paper } from "@material-ui/core";
import Header from "../Header";

const MedList = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(typeof API_KEY);
  return (
    <div>
      <header className="page-header">
        <div>Medications</div>
      </header>
      <Header />
      <h1>This is the list of meds</h1>
    </div>
  );
};

export default MedList;
