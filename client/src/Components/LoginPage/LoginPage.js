import React, { useState } from "react";
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
// import axios from "axios";
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
  // const [user, setUser] = useState([]);
  const [loginUser, setLoginUser] = useState(defaultUserState);

  // const getUser = async () => {
  //   const result = await Axios.get('/users/:username', loginUser)
  //   .then()
  // }

  const handleChange = (prop) => (e) => {
    setLoginUser({ ...loginUser, [prop]: e.target.value });
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
    // window.location.replace("/");
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
              id="standard-username-input"
              label="Username"
              type="username"
            />
            <br />
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={loginUser.showPassword ? "text" : "password"}
                value={loginUser.password}
                onChange={handleChange("password")}
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

// useEffect(() => {
//   callBackendAPI()
//     .then((res) => setUsers(res))
//     .catch((err) => console.log(err));
// }, []);

// // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
// const callBackendAPI = async () => {
//   const response = await fetch("/users");
//   const body = await response.json();

//   if (response.status !== 200) {
//     throw Error(body.message);
//   }
//   return body;
// };
