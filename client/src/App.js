import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
// import LoginPage from "./Components/LoginPage";
import Router, { checkAuth } from "./Router";
import { BrowserRouter } from "react-router-dom";
// import Header from "./Components/Header";

const App = () => {
  return (
    <BrowserRouter>
      {checkAuth() ? (
        <div>
          <NavBar /> <Router />
        </div>
      ) : (
        <div>
          <Router />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
