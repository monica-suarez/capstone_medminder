import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon  from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import './navbar.css'

const NavBar = () =>{
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
          top: 'auto',
          bottom: 0,
        },
        grow: {
          flexGrow: 1,
        },
  
      }));
        const classes = useStyles();
    return(
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className="toolbar">
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <IconButton>
              <HomeIcon  alt="home page" onClick={() => window.location.replace('./')} style={{ fontSize: 40 }} className="icons">
              </HomeIcon>
          </IconButton>
          <IconButton>
            <PersonIcon  alt="personal information" onClick={() => window.location.replace('./personalinfo')} style={{ fontSize: 40 }} className="icons"/>         
          </IconButton>
        
          <IconButton>
            <LocalHospitalIcon alt="medication list" style={{ fontSize: 40 }} className="icons"/>
          </IconButton>
          <IconButton>
            <MenuBookIcon alt="dosage log" style={{ fontSize: 40 }} className="icons"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
}

export default NavBar
