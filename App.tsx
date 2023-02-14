import React from 'react';
import {StatusBar} from 'react-native';

import {AppNavigation} from "./src/navigation";

function App(): JSX.Element {
    return <>
        <StatusBar barStyle="light-content"/>
        <AppNavigation/>
    </>
}

export default App;
