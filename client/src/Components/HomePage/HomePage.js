import React from "react";
import { checkAuth } from "../../Router";
// import Header from "../Header";
import { Slide, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../MedList/medlist.css";

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

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <header className="page-header">
        <div>Medication Alerts</div>
      </header>
      {/* <Header /> */}
      <Slide direction="right" in={checkAuth()}>
        <Paper className={classes.welcome}>
          <Typography>Welcome: user name here</Typography>
        </Paper>
      </Slide>
      {/* <Header /> */}
      <h1 className="alert-title">Current Alerts:</h1>
    </div>
  );
};

export default HomePage;
