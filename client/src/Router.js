import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import PersonalInfo from "./Components/PersonalInfo";
import MedList from "./Components/MedList";
import MedLog from "./Components/MedLog";
import cookie from "cookie";

export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="./login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute path="/personalinfo" component={PersonalInfo} />
      <ProtectedRoute path="/medications" component={MedList} />
      <ProtectedRoute path="/medicationlog" component={MedLog} />
    </Switch>
  );
};

export default Router;
