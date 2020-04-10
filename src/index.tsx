import React from 'react';
import ReactDOM from 'react-dom';
import FormResultsContainer from './components/FormResultsContainer';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-css-only/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <FormResultsContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
