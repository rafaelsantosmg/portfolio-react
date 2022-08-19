import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={ classes.mainContainer }>
      <Typography variant="h4" align="center" className={ classes.heading }>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
      <Typography
          variant="h2"
          className={ `${classes.timeLineYear} ${classes.timeLineItem}` }
        >
          2022
        </Typography>
        <Box component="div" className={ classes.timeLineItem }>
          <Typography
            variant="h5"
            align="center"
            className={ classes.subHeading }
          >
            Summer Job de Instrução
          </Typography>
          <Typography variant="body1" align="center" className={ classes.body1 }>
            Trybe
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={ classes.subtitle1 }
          >
            Responsável por realizar monitorias técnicas individuais e coletivas,
            revisão de conteúdo de forma síncrona e suporte por Slack para resolução de dúvidas.
            Os conteúdos abordados para monitoria e revisão incluem:
            Fundamentos do Desenvolvimento Web contendo HTML, CSS,
            JAVASCRIPT e testes automatizados com Jest. Front-end passando por REACT e REDUX.
            Back-end abordando tecnologias como Mongo, SQL e NODEJS e o módulo de Ciências da Computação.
          </Typography>
          </Box>
        <Typography
          variant="h2"
          className={ `${classes.timeLineYear} ${classes.timeLineItem}` }
        >
          2019
        </Typography>
        <Box component="div" className={ classes.timeLineItem }>
          <Typography
            variant="h5"
            align="center"
            className={ classes.subHeading }
          >
            Gerente Geral
          </Typography>
          <Typography variant="body1" align="center" className={ classes.body1 }>
            Casa de Artigos Religiosos Caboclo Pena Vermelha
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={ classes.subtitle1 }
          >
            Instalação de Softwares e Redes, Implantação e Administração 
            de sistema de Estoque, Vendas, Instalação e Manutenção Elétricas,
            Atendimento a Cliente, Fornecedores, Implantação de Sistemas de
            Monitoramento e Segurança.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={ `${classes.timeLineYear} ${classes.timeLineItem}` }
        >
          2009
        </Typography>
        <Box component="div" className={ classes.timeLineItem }>
          <Typography
            variant="h5"
            align="center"
            className={ classes.subHeading }
          >
            Técnico de suporte de informática
          </Typography>
          <Typography variant="body1" align="center" className={ classes.body1 }>
            Varosoft Informatica LTDA - ME
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={ classes.subtitle1 }
          >
            Suporte a usuário, Experiência como técnico alocado, Help-Desk. 
            Técnico de Laboratório, instalação e projetos de cabeamento de redes.
            Atendimento de campo.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={ `${classes.timeLineYear} ${classes.timeLineItem}` }
        >
          2008
        </Typography>
        <Box component="div" className={ classes.timeLineItem }>
          <Typography
            variant="h5"
            align="center"
            className={ classes.subHeading }
          >
            Técnico de suporte de informática
          </Typography>
          <Typography variant="body1" align="center" className={ classes.body1 }>

            Della Sávia Sistemas - Software para Gestão de Oficinas
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={ classes.subtitle1 }
          >
            Atividades exercidas: Manutenção de Hardware, Instalações de Softwares, Manutenção e instalação de redes, Switch,
            Roteadores LAN e Wirelles, Atendimento em campo a clientes, Suporte on-line via VNC e Conexão Remota,
            Atendimento Help Desk, Manutenção preventiva e corretiva nos sistemas operacionais Win9X, ME, 2000, 2000 e 2003
            Server, XP, Vista e conhecimentos básicos em Linux.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
