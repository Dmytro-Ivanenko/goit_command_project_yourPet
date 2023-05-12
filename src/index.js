import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import './index.scss';

import '@fontsource/manrope';
import '@fontsource/inter';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/goit_command_project_yourPet">
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
