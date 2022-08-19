import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h2" className={classes.heading}>
            Contatos...
          </Typography>
          <Typography variant="h5" className={classes.heading}>
            Telefone: (35) 997049229 (WhatsApp)
          </Typography>
          <Typography variant="h5" className={classes.heading}>
            E-mail: rafaelalonsobarbosa@gmail.com
          </Typography>
          <Footer />
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
