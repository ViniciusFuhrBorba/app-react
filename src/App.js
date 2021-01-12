import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn/';
import GuestRoute from './routes/GuestRoute';
import { Provider } from 'react-redux';

import theme from './theme';
import store from './store';

import './mock';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <GuestRoute path='/sign-in' element={<SignIn />}></GuestRoute>
            <Route path='*' element={<h1>Not Found 404!</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
