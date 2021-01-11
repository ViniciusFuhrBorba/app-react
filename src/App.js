import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import Home from './pages/Home';
import SignIn from './pages/SignIn/'

import theme from './theme'


function App() {
  console.log(window.location.href);
  const url = window.location.href;

  return (
    <ThemeProvider theme={theme}>
      {
        url === 'http://localhost:3000/'
        ? <Home/>
        : <SignIn/>
      }
    </ThemeProvider>
  );
}

export default App;
