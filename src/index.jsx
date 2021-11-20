import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

import 'react-toastify/dist/ReactToastify.css';

import Home from './templates/Home';
import { Register } from './templates/Register';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <Register />
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
