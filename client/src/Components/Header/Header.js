import React from "react";
import { checkAuth } from "../../Router";
import { Slide, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./header.css";

const useStyles = makeStyles((theme) => ({
  welcome: {
    backgroundColor: "gray",
    color: "ivory",
    height: 32,
    fontSize: 28,
    fontWeight: "300",
    paddingTop: "1%",
    paddingLeft: "1%",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      {checkAuth() ? (
        <Slide direction="down" in={checkAuth()}>
          <Paper className={classes.welcome}>
            <Typography>Welcome: user name here</Typography>
          </Paper>
        </Slide>
      ) : (
        <div className="login-header">
          <div className="login-title">MedMinder</div>
          <h3>Never Forget Your Meds Again</h3>
        </div>
      )}
    </div>
  );
};

export default Header;
