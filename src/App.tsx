import React from 'react';
import {Provider} from "react-redux";
import {RootConfig} from "./root/configure-root";
import {UserPage} from "./user-page";


const App: React.FC<RootConfig> = ({store}) => {
    return (
        <Provider store={store}>
            <UserPage/>
        </Provider>
    );
};

export default App;

