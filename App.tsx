import React from 'react';
import {StatusBar} from 'react-native';

import {Colors} from "./src/util/constants/Colors"
import AuthContextProvider from "./src/store/auth-context";
import Main from "./src/screens/Main";

function App(): JSX.Element {
    return <>
        <StatusBar backgroundColor={Colors.dark} barStyle="light-content"/>

        <AuthContextProvider>
            <Main/>
        </AuthContextProvider>
    </>
}

export default App;
