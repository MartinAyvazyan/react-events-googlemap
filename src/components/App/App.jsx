import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { cyan500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from '../Main/Main';
import store from '../../store';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Main />
    </MuiThemeProvider>
  </Provider>
);

export default hot(module)(App);
