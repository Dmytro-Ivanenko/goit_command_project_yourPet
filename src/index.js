import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/Dmytro-Ivanenko/goit_command_project_yourPet">
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
