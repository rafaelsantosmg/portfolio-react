import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import shoppingCart from "../images/shopping-cart.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Shopping Cart",
    description: `Projeto de conclusão do curso de Fundamentos do curso da Trybe, onde fazemos um loja utilizando API do mercado livre`,
    image: shoppingCart,
    url: 'https://rafaelsantosmg.github.io/project-shopping-cart/',
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Link
              to={{ pathname: 'https://rafaelsantosmg.github.io/project-shopping-cart/' }}
              target="_blank"
            >
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
