import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import App from './App';
import theme from './global/styles/theme';
import renderer from 'react-test-renderer';

test('inits without crashing', () => {
  renderer.create(
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  );
});
