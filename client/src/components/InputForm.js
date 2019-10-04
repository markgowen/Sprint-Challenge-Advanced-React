import React from 'react'
import { useInput } from '../hooks/useInput'

import { makeStyles } from '@material-ui/core/styles';
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

function InputForm() {
  const [favPlayer, handleFavPlayer, setFavPlayer] = useInput('favPlayer', '');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const clearForm = e => {
    e.preventDefault();
    setFavPlayer('');
  };

  const classes = useStyles();
  
  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Favorite Player"
          className={classes.textField}
          value={favPlayer}
          onChange={handleFavPlayer}
          margin="normal"
        />
      </form>
      <div className={classes.favPlayer}>{favPlayer}</div>
    </div>
  );
}

export default InputForm;
