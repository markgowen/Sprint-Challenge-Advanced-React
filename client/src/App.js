import React from 'react';
import './App.css';

// Components
import PlayerList from './components/PlayerList'

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
  toolbar: {
    backgroundColor: '#0056a3',
  },
  heading: {
    background: '#fff',
    margin: '30px',

  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar} variant="dense">
          <Typography variant="h6" color="inherit" data-testid='AppBar-Text'>
            Women's World Cup
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography className={classes.heading} data-testid='Heading-Text'>
        Players Ranked by Search Interest from Google Trends, June-July 2019
      </Typography>
      <PlayerList />
    </div>
  );
}

export default App;
