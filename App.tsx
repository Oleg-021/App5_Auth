import React from 'react';
import {StatusBar} from 'react-native';

import {Colors, welcomeBarStyle} from "./src/util/constants/Colors"
import AuthContextProvider from "./src/store/auth-context";
import Main from "./src/screens/Main";

function App(): JSX.Element {
    return <>
        <StatusBar backgroundColor={Colors.primary500} barStyle={welcomeBarStyle}/>

        <AuthContextProvider>
            <Main/>
        </AuthContextProvider>
    </>
}

export default App;
