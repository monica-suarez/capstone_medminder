import React, { useState } from "react";
import axios from "axios";
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
    dob: {
      width: "25ch",
      color: "gray",
    },
  },
}));

const SignUp = (props) => {
  const classes = useStyles();
  const defaultUserState = {
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    showPassword: false,
  };

  const [newUser, setNewUser] = useState(defaultUserState);

  const postNewUser = () => {
    axios
      .post("/users", newUser)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => {
        window.alert("Username already exists");
        console.log(error);
        if (!error) {
          window.location.replace("/login");
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    console.log(value);
  };

  const handleClickShowPassword = () => {
    setNewUser({
      ...newUser,
      showPassword: !newUser.showPassword,
    });
    // console.log(showNewPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postNewUser(newUser);
    setNewUser(defaultUserState);
    // window.location.replace("/login");
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
              type="text"
              name="first_name"
              value={newUser.first_name}
              onChange={handleChange}
            />
            <br />
            <TextField
              id="middleName-input"
              label="Middle Name (optional)"
              type="text"
              name="middle_name"
              value={newUser.middle_name}
              onChange={handleChange}
            />
            <br />
            <TextField
              required
              id="lastName-input"
              label="Last Name"
              type="last_name"
              name="last_name"
              value={newUser.last_name}
              onChange={handleChange}
            />
            <br />
            <TextField
              required
              style={{ paddingTop: "15px" }}
              className={classes.dob}
              id="dob-input"
              label=""
              type="date"
              name="date_of_birth"
              value={newUser.date_of_birth}
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
            {/* <TextField
              id="phone-input"
              label="Phone (optional)"
              type="phone"
              name="phone"
              value={newUser.phone}
              onChange={handleChange}
            />
            <br /> */}
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
