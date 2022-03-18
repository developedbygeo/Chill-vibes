import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './utils/theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={myTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
reportWebVitals();
