import React from 'react';
import './App.css';

// Components
import PlayerList from './components/PlayerList'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';


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
          <Typography variant="h6" color="inherit">
            Women's World Cup
          </Typography>
          <Switch
            defaultChecked
            value="checkedF"
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
        </Toolbar>
      </AppBar>
      <Typography className={classes.heading}>
        Players Ranked by Search Interest from Google Trends, June-July 2019
      </Typography>
      <PlayerList />
    </div>
  );
}

export default App;
