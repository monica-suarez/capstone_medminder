import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  logout: {
    marginLeft: "auto",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className="toolbar">
        {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton> */}
        <IconButton onClick={() => window.location.replace("./")}>
          <HomeIcon
            alt="home page"
            style={{ fontSize: 40 }}
            className="icons"
          ></HomeIcon>
        </IconButton>
        <IconButton onClick={() => window.location.replace("./personalinfo")}>
          <PersonIcon
            alt="personal information"
            style={{ fontSize: 40 }}
            className="icons"
          />
        </IconButton>

        <IconButton onClick={() => window.location.replace("./medications")}>
          <LocalHospitalIcon
            alt="medication list"
            style={{ fontSize: 40 }}
            className="icons"
          />
        </IconButton>
        <IconButton onClick={() => window.location.replace("./medicationlog")}>
          <MenuBookIcon
            alt="dosage log"
            style={{ fontSize: 40 }}
            className="icons"
          />
        </IconButton>
        <div
          className={classes.logout}
          onClick={() => {
            document.cookie = "loggedIn=";
            window.location.replace("/login");
          }}
        >
          <Link className="logout" to="/login">
            Log Out
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
