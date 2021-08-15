import './App.css';
import { useState } from 'react';

import Home from './home'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

  const useStyles = makeStyles({
    root: {
      height: '100vh',
      backgroundColor: '#282c34',
      color: 'white'
    }
  })

const App = () => {
  const classes = useStyles()
  

  return (
    <div className={classes.root} >
      <Home />
    </div>
  );
}

export default App;
