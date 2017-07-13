import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducer'
import logger from './middlewares/logger'

injectTapEventPlugin();

//  create the store
//    - Supply the reducer
const store = createStore(
  reducer,
  applyMiddleware(logger)
);

// Provide app
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
