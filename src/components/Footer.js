import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={ classes.bottomNavContainer }>
      <Link to={ { pathname: 'https://github.com/rafaelsantosmg' } } target="_blank">
        <BottomNavigationAction
          icon={ <GitHubIcon /> }
          className={ classes.root }
        />
      </Link>
      <Link to={ { pathname: 'https://www.facebook.com/helcksp' } } target="_blank">
        <BottomNavigationAction
          icon={ <Facebook /> }
          className={ classes.root }
        />
      </Link>
      <Link to={ { pathname: 'https://twitter.com/devrafaelsantos' } } target="_blank">
        <BottomNavigationAction
          icon={ <Twitter /> }
          className={ classes.root }
        />
      </Link>
      <Link to={ { pathname: 'https://www.instagram.com/rafaelsantosdev/' } } target="_blank">
        <BottomNavigationAction
          icon={ <Instagram /> }
          className={ classes.root }
        />
      </Link>
    </BottomNavigation>
  );
};
export default Footer;
