import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subtitle1: {
    color: "whitesmoke",
    fontWeight: "bolder",
    fontSize: "14pt",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={ classes.mainContainer }>
      
      <Typography variant="h4" align="center" className={ classes.heading }>
        About
      </Typography>
      <Grid container justify="center">
        <Box component="div" className={ classes.timeLineItem }>
          <Typography
            variant="subtitle1"
            align="center"
            className={ classes.subtitle1 }
          >
            <p>
              Sou apaixonado por tecnologia e ??rea de desenvolvimento, pr??-ativo ?? ide?? nas quais compete a equipe solucionar problemas, pr??-atividades na qual se refere tamb??m na busca de qualidade do servi??o, esfor??ado para novas atividades que sejam desconhecidas, aprendizagem r??pida, din??mico e respons??vel.
            </p>
            <p>
              Sou estudante da Trybe Curso de Desenvolvimento Web Full Stack (Front-End e Back End), tamb??m estudante de Ci??ncias da Computa????o pela Est??cio.
            </p>
            <p>
              Apoio qualquer atividade em grupo, e estou sempre disposto a encarar novos desafios, adoro estar em ambientes colaborativos, com alto n??vel de diversidade, onde podemos nos comunicar e nos desenvolver com outras pessoas que tamb??m prezam por conex??es humanas e sou uma pessoa extremamente soci??vel.
            </p>
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default About;
