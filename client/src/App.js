import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
};

export default App;
