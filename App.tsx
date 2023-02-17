import React from 'react';
import {StatusBar} from 'react-native';

import {Colors} from "./src/util/constants/Colors"
import AuthContextProvider from "./src/store/auth-context";
import MainScreen from "./src/screens/MainScreen";

function App(): JSX.Element {
    return <>
        <StatusBar backgroundColor={Colors.yellow500} barStyle="dark-content"/>

        <AuthContextProvider>
            <MainScreen/>
        </AuthContextProvider>
    </>
}

export default App;
