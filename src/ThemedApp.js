import React from 'react';
import theme from './assets/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './assets/react-toolbox/theme.css'

const ThemedApp = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default ThemedApp;
