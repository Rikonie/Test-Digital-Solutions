import React from 'react';
import * as ReactDOM from "react-dom";
import App from './App';
import {configureRoot} from "./root/configure-root";


const startApp = async () => {
    console.log('START APP');
    const config = await configureRoot();
    ReactDOM.render(<App store={config.store}/>, document.getElementById('root'));
};

startApp();

