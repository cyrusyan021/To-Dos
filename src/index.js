import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

import { store, persistor } from './redux/store';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PersistGate persistor={ persistor }>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);