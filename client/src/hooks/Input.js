import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

// Styles
const useStyles = makeStyles(theme => ({
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

function Input() {
  const [values, setValues] = React.useState({
    name: ''
  });

  const classes = useStyles();
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Favorite Player"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
        />
      </form>
      <div className={classes.favPlayer}>{values.name}</div>
    </div>
  );
}

export default Input;
