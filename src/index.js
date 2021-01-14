import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { getSettings } from './utils/settings';
import App from './App';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';

import { SettingsProvider } from './context/SettingsContext';


const settings = getSettings();

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <SettingsProvider settings={settings}>
        <App />
      </SettingsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

