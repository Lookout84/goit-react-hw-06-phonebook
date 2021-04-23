import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles.css';
import store from './redux/stotre';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
