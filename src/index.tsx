import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import theme from './components/projects/Forrest/Theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
