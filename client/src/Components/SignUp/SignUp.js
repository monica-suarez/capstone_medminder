import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1>This is the signup page</h1>
      <Link to="/login">Back to Login</Link>
    </div>
  );
};

export default SignUp;
