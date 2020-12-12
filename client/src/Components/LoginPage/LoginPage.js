import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Box,
  TextField,
  Button,
  IconButton,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./login.css";
import axios from "axios";
// import AppDataService from "../../Services/AppServices";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "23ch",
    },
    textField: {
      width: "25ch",
    },
  },
}));

const LoginPage = (props) => {
  const classes = useStyles();
  const defaultUserState = {
    username: "",
    password: "",
    showPassword: false,
  };
  const [loginUser, setLoginUser] = useState(defaultUserState);
  const [users, setUsers] = useState([]);

  console.log(users);

  const getUsers = () => {
    axios
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  };

  // const getSelectedUser = () => {
  //   users.filter(user => {return user.username === loginUser})
  // need to assign user into key, or separate into obj
  //   if(getSelectedUser === undefined){
  //     window.alert("Username/password does not exist")
  //   } else {
  //     props.history.push({
  //       pathname: "/",
  //       user: {user},
  //     })
  //   }
  // }

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
    console.log(value);
  };

  const handleClickShowPassword = () => {
    setLoginUser({ ...loginUser, showPassword: !loginUser.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn = true; max-age = 60*1000";
    // props.history.push("/");
    window.location.replace("/");
    // console.log(loginUser)
  };

  return (
    <div>
      <Header />
      <Box
        className={classes.root}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Paper elevation={5} className="login-form">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              name="username"
              onChange={handleChange}
              id="standard-username-input"
              label="Username"
              type="username"
              value={loginUser.username}
            />
            <br />
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                name="password"
                onChange={handleChange}
                id="standard-adornment-password"
                type={loginUser.showPassword ? "text" : "password"}
                value={loginUser.password}
                autoComplete="current-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {loginUser.showPassword ? (
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
              className={classes.margin}
              disableElevation
            >
              Log In
            </Button>
          </form>
          <br />
          <br />
          <Link to="/signup" className="signup-anchor">
            New user? Sign up here
          </Link>
        </Paper>
      </Box>
    </div>
  );
};

export default LoginPage;
