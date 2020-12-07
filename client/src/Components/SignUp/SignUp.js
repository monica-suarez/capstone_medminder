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
// import AppDataService from "../../Services/AppServices";
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

const SignUp = (props) => {
  const classes = useStyles();
  const defaultUserState = {
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  };

  const [newUser, setNewUser] = useState(defaultUserState);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const postNewUser = async () => {
    const initResponse = await fetch("/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newUser: newUser,
      }),
    });
    const data = await initResponse.json();
    console.log("Response", data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    console.log(value);
  };

  const handleClickShowPassword = () => {
    setShowNewPassword({
      ...showNewPassword,
      showPassword: !newUser.showPassword,
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postNewUser();
    // document.cookie = "loggedIn = true; max-age = 60*1000";
    // // props.history.push("/");
    // var data = {
    //   firstName: newUser.firstName,
    //   middleName: newUser.middleName,
    //   lastName: newUser.middleName,
    //   dateOfBirth: newUser.dateOfBirth,
    //   email: newUser.email,
    //   phone: newUser.phone,
    //   username: newUser.username,
    //   password: newUser.password,
    // };
    // AppDataService.createUser(data)
    //   .then((response) => {
    //     setNewUser({
    //       firstName: response.data.firstName,
    //       middleName: response.data.middleName,
    //       lastName: response.data.middleName,
    //       dateOfBirth: response.data.dateOfBirth,
    //       email: response.data.email,
    //       phone: response.data.phone,
    //       username: response.data.username,
    //       password: response.data.password,
    //     });
    //     // setSubmitted(true);
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // window.location.replace("/login");
    // props.history.push("/PersonalInfo")
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
        <div className="signup-header">Please complete signup below:</div>
        <Paper elevation={5} className="paper-signup">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              required
              id="firstName-input"
              label="First Name"
              type="firstName"
              name="firstName"
              value={newUser.firstName}
              onChange={handleChange}
            />
            <br />
            <TextField
              id="middleName-input"
              label="Middle Name (optional)"
              type="middleName"
              name="middleName"
              value={newUser.middleName}
              onChange={handleChange}
            />
            <br />
            <TextField
              required
              id="lastName-input"
              label="Last Name"
              type="lastName"
              name="lastName"
              value={newUser.lastName}
              onChange={handleChange}
            />
            <br />
            <TextField
              required
              id="dob-input"
              label="DOB (ex. MM/DD/YYYY)"
              type="dob"
              name="dateOfBirth"
              value={newUser.dateOfBirth}
              onChange={handleChange}
            />
            <br />
            <TextField
              required
              id="email-input"
              label="Email"
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
            />
            <br />
            <TextField
              id="phone-input"
              label="Phone (optional)"
              type="phone"
              name="phone"
              value={newUser.phone}
              onChange={handleChange}
            />
            <br />
            <TextField
              required
              id="username-input"
              label="Username"
              type="username"
              name="username"
              value={newUser.username}
              onChange={handleChange}
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
                type={newUser.showPassword ? "text" : "password"}
                value={newUser.password}
                onChange={handleChange}
                autoComplete="current-password"
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {newUser.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
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
        <br />
        <Link to="/login">Back to Login</Link>
      </Box>
    </div>
  );
};

export default SignUp;

// const [values, setValues] = useState({
//   firstName: "",
//   middleName: "",
//   lastName: "",
//   dob: "",
//   email: "",
//   phone: "",
//   username: "",
//   password: "",
//   showPassword: false,
// });
