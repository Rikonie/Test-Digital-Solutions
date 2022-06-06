import React from 'react';
import * as ReactDOM from "react-dom";
import App from './App';
import {configureRoot} from "./root/configure-root";
import {createRoot} from "react-dom/client";


const startApp = async () => {

    const container = document.getElementById('root');
    const config = await configureRoot();
    createRoot(container!).render(<App store={config.store}/>)
};

startApp();

