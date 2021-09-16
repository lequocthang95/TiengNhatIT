import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import CategoryStore from './redux/categoryStore/store'

ReactDOM.render(
  <Provider store={CategoryStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
