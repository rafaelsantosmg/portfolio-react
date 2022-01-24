import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    margin: theme.spacing(1),
  },
  title: {
    color: "whitesmoke",
    fontWeight: "bolder",
    fontSize: "3em",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={ classes.typedContainer }>
      <Grid container justify="center">
        <Avatar className={ classes.avatar } src={ avatar } alt="Rafael Santos" />
      </Grid>
      <Typography className={ classes.title } variant="h4">
        <Typed
          strings={ ["Rafael Santos"] }
          typeSpeed={ 50 }
        />
      </Typography>

      <Typography className={ classes.title } variant="h4">
        <Typed
          strings={ ["Web Development Student | Trybe"] }
          typeSpeed={ 50 }
        />
      </Typography>

      <Typography className={ classes.subtitle } variant="h5">
        <Typed
          strings={ [
            "Full-Stack Developer",
            "Frontend Developer",
            "Backend Developer",
          ] }
          typeSpeed={ 40 }
          backSpeed={ 50 }
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
