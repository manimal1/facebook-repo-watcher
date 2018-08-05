import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const middlewares = [reduxThunk, logger];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
