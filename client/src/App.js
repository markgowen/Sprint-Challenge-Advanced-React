import React from 'react';
import './App.css';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));



function App() {
const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Women's World Cup
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
  );
}

export default App;
