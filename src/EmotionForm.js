import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/ModeComment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import hate from './backgroundfoto.jpeg';


const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100vh - 65px)',
  },
  image: {
    backgroundImage: `url(${hate})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  margins: {
    margin: theme.spacing(3, 0, 2),
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    display:'flex',
    justifyContent: 'flex-end',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));



export default function EmotionForm() {
  const classes = useStyles();

  return (
      <>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
         
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Quem somos
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Contribua
            </Link>
          </nav>

        </Toolbar>
      </AppBar>

      <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={false} md={7} className={classes.image} />
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Analise sua frase
          </Typography>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={8} lg={9}>
            <TextField
              variant="outlined"
              margin="normal"              
              id="text"
              placeholder="Digite sua frase..."
              name="text"
              autoFocus
              rows="4"
              multiline
              fullWidth
              className={classes.margins}
            />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
            <Button              
              fullWidth
              variant="contained"
              color="primary"
              className={classes.margins}
            >
              Analisar
            </Button>
            </Grid>
            </Grid>
          
        </div>
      </Grid>
    </Grid>

      </>
  );
}