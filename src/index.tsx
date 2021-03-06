import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import { myTheme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
