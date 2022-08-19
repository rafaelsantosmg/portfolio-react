import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from "@material-ui/icons/LinkedIn";
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
      <Link to={ { pathname: 'https://www.linkedin.com/in/rafaelsantosmg/' } } target="_blank">
        <BottomNavigationAction
          icon={ <LinkedIn /> }
          className={ classes.root }
        />
      </Link>
      <Link to={ { pathname: 'https://github.com/rafaelsantosmg' } } target="_blank">
        <BottomNavigationAction
          icon={ <GitHubIcon /> }
          className={ classes.root }
        />
      </Link>
    </BottomNavigation>
  );
};
export default Footer;
