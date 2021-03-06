import 'src/database/firebase';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import theme from './global/styles/theme';

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

declare const module: any;
if (module.hot) module.hot.accept();
