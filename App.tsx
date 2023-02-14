import React from 'react';
import {StatusBar} from 'react-native';

import {AppNavigation} from "./src/navigation";
import {Colors} from "./src/util/constants/Colors"

function App(): JSX.Element {
    return <>
        <StatusBar backgroundColor={Colors.dark} barStyle="light-content"/>
        <AppNavigation/>
    </>
}

export default App;
