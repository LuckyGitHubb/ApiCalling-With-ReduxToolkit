import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './apps/store';
import ApiCalling from './components/ApiCalling';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
  <ApiCalling/>
  </Provider>
  </>
);
