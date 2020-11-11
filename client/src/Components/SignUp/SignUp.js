import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./signup.css";

const useStyles = makeStyles((theme) => ({
  formBox: {
    "& .MuiTextField-root": {
      width: "25ch",
    },
    textField: {
      width: "25ch",
    },
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn = true; max-age = 60*1000";
    // props.history.push("/");
    window.location.replace("/");
  };
  return (
    <div>
      <Header />

      <Box
        className={classes.formBox}
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        alignItems="center"
      >
        <Paper elevation={5} className="paper-signup">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              required
              id="firstName-input"
              label="First Name"
              type="firstName"
            />
            <br />
            <TextField
              id="middleName-input"
              label="Middle Name (optional)"
              type="middleName"
            />
            <br />
            <TextField
              required
              id="lastName-input"
              label="Last Name"
              type="lastName"
            />
            <br />
            <TextField
              required
              id="dob-input"
              label="DOB (ex. MM/DD/YYYY)"
              type="dob"
            />
            <br />
            <TextField required id="email-input" label="Email" type="email" />
            <br />
            <TextField id="phone-input" label="Phone (optional)" type="phone" />
            <br />
            <TextField
              required
              id="username-input"
              label="Username"
              type="username"
            />
            <br />
            <FormControl
              required
              className={clsx(classes.margin, classes.textField)}
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                autoComplete="current-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <br />
            <br />
            <Button
              type="submit"
              variant="contained"
              size="small"
              color="secondary"
              disableElevation
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Box>
      <br />
      <Link to="/login">Back to Login</Link>
    </div>
  );
};

export default SignUp;
