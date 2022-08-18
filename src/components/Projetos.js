import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import shoppingCart from '../images/shopping-cart.png';
import frontEndOnlineSore from '../images/front-end-online-store.png'
import recipesApp from '../images/recipes01.png'
import tfc from '../images/tfc.gif'
import ebytr from '../images/ebytr.png'
import blogsApi from '../images/blogs-api.png'

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
    name: "Full-Stack Ebytr",
    description: `Projeto referente a Blitz de carreira da Trybe, onde fomos provocados a fazer uma aplicação Full-Stack para Criação, Edição e Deleção de Tarefas. O objetivo foi disponibilizar um front-end para o colaborador se cadastrar e poder fazer controle das tarefas.`,
    image: ebytr,
    url: 'https://recipes-re-appl.vercel.app/',
  },
  {
    name: "Front-End Shopping Cart",
    description: `Projeto de conclusão do curso de Fundamentos do curso da Trybe, onde fazemos um loja utilizando API do mercado livre`,
    image: shoppingCart,
    url: 'https://rafaelsantosmg.github.io/project-shopping-cart/',
  },
  {
    name: "Front-End Online Store",
    description: `Projeto desenvolvido utilizando React, e metodologias ágeis, PropDrilling`,
    image: frontEndOnlineSore,
    url: 'https://front-end-online-store-omega.vercel.app/',
  },
  {
    name: "Front-End APP de Receitas",
    description: `Projeto de conclusão de Front-end. Desenvolvido utilizando React, Context API, Hooks e metodologias ágeis`,
    image: recipesApp,
    url: 'https://recipes-re-appl.vercel.app/',
  },
  {
    name: "Back-End Blogs API",
    description: `Projeto desenvolvido utilizando NodeJs, Express, Sequelize, JWT`,
    image: blogsApi,
    url: 'https://github.com/rafaelsantosmg/backend-blogs-api',
  },
  {
    name: "Back-End TFC",
    description: `Projeto de integração onde fomos provocados a criar todo "back-end" utilizando a biblioteca "express" com “TypeScript”, e colocando em prática os conhecimentos em POO e SOLID.`,
    image: tfc,
    url: 'https://github.com/rafaelsantosmg/backend-poo-trybe-futebol-clube',
  },
];

const Projetos = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Link
              to={{ pathname: project.url }}
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

export default Projetos;
