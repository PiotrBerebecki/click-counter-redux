import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import counterApp from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(counterApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
