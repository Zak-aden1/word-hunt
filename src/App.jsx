import './App.css';
import { useState } from 'react';

import Home from './home'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { withStyles } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors';
import { Switch } from '@material-ui/core';

  const useStyles = makeStyles({
    root: {
      height: '100vh',
      backgroundColor: '#282c34',
      color: 'white'
    },
    light: {
      height: '100vh',
      backgroundColor: 'white',
      color: 'black'
    }
  })

  const DarkMode = withStyles({
    switchBase: {
        color: grey[300],
        '&$checked': {
        color: grey[500],
        },
        '&$checked + $track': {
        backgroundColor: grey[500],
        },
    },
    checked: {},
    track: {},
    })(Switch);

const App = () => {
  const classes = useStyles()
   const [light, setLight] =useState(false)
  

  return (
    <div className={light ? classes.light :classes.root} styles={{transition: 'a'}} >
      <div style={{position: 'absolute', top: 0, right: 15, paddingTop: 10}}>
                <span>{light ?'dark mode': 'light mode' }</span>
                <DarkMode checked={light} onChange={() =>setLight(!light)} />
            </div>
      <Home />
    </div>
  );
}

export default App;
