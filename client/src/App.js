import React from 'react';
import './App.css';

// Components
import PlayerList from './components/PlayerList';
import Input from './hooks/Input';

// Material UI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    backgroundColor: '#0056a3'
  },
  heading: {
    background: '#fff',
    margin: '30px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 auto'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  favPlayer: {
    textAlign: 'center'
  }
}));

function App() {
  const [values, setValues] = React.useState({
    name: ''
  });

  const classes = useStyles();
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar} variant="dense">
          <Typography variant="h6" color="inherit" data-testid="AppBar-Text">
            Women's World Cup
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography className={classes.heading} data-testid="Heading-Text">
        Players Ranked by Search Interest from Google Trends, June-July 2019
      </Typography>
      <Input />
      <PlayerList />
    </div>
  );
}

export default App;
