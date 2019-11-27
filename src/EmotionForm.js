import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/ModeComment";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import hate from "./assets/hate.jpeg";
import firebase from "./firebase";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${hate})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    padding: "0 2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: "100%"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function EmotionForm() {
  const classes = useStyles();
  const rootRef = firebase
    .database()
    .ref()
    .child("database");

  const [categoria, setCategoria] = useState("");
  const [texto, setTexto] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const saveFirebase = () => {
    console.log("Enviando");

    rootRef.push().set({
      texto: texto,
      categoria: categoria
    });
  };

  const changeText = texto => {
    setTexto({ texto });
    if (texto.length > 0) {
      if (categoria.length > 0) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    } else {
      setIsDisabled(false);
    }

    console.log("Mudando TEXTO");
  };

  const handleChange = event => {
    console.log("EVENTO", event.target.value);
    setCategoria(event.target.value);
  };

  return (
    <Grid container component="main" className={classes.root}>
      {/* <CssBaseline /> */}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <div>
            <Typography component="h1" variant="h5">
              Teste nosso algoritmo:
            </Typography>

            <TextField
              variant="filled"
              margin="normal"
              fullWidth
              id="text"
              placeholder="Insira uma mensagem para ser analisada"
              name="text"
              autoFocus
              rows="4"
              multiline
            />
            <Button
              disabled={true}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Disponível em breve
            </Button>
          </div>

          <div>
            <Typography component="h1" variant="h5">
              Quer contribuir?
            </Typography>
            <Typography component="h3" variant="h7">
              Ajude nosso algoritmo a identificar discursos de ódio.
            </Typography>
            <TextField
              variant="filled"
              margin="normal"
              fullWidth
              id="text"
              placeholder="Insira aqui uma mensagem de ódio que você viu ou recebeu."
              name="text"
              autoFocus
              rows="4"
              multiline
              onChange={texto => changeText(texto)}
            />
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Escolha uma categoria
            </InputLabel>

            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label-label"
              value={categoria}
              onChange={event => handleChange(event)}
              placeholder="Escolha uma categoria"
            >
              <MenuItem value={"racismo"}>Racismo</MenuItem>
              <MenuItem value={"intolerancia_religiosa"}>
                Intolerância Religiosa
              </MenuItem>
              <MenuItem value={"machismo"}>Machismo</MenuItem>
            </Select>

            <Button
              disabled={isDisabled}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => saveFirebase}
            >
              Enviar
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
