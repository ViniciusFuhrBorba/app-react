import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn/';
import SignUp from './pages/SignUp';
import GuestRoute from './routes/GuestRoute';


// import theme from './theme';
import createTheme from './theme';
import { useSettings } from './context/SettingsContext';

import Auth from './components/Auth';


import './mock';

function App() {

  const { settings } = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <GuestRoute path='/sign-in' element={<SignIn />}></GuestRoute>
            <GuestRoute path='/sign-up' element={<SignUp />}></GuestRoute>
            <Route path='//*' element={<Home />}></Route>
          </Routes>
        </Auth>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
