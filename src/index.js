import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { App } from 'App';
import './index.scss';

import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';

import '@fontsource/inter/400.css';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,       // redefine the 'xs' breakpoint value
            sm: 320,     // redefine the 'sm' breakpoint value
            md: 768,     // redefine the 'md' breakpoint value
            lg: 1280,    // redefine the 'lg' breakpoint value
            xl: 1920,    // redefine the 'xl' breakpoint value
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter basename="/goit_command_project_yourPet">
                        <App />
                    </BrowserRouter>
                </ThemeProvider>  
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
