import React from "react";
import {NavigationContainer} from "@react-navigation/native";

import AuthStack from "./AuthStack";
import AuthContextProvider from "../store/auth-context";

interface IAppNavigation {
}

const AppNavigation: React.FC<IAppNavigation> = () => {
    return (
        <AuthContextProvider>
            <NavigationContainer>
                <AuthStack/>
            </NavigationContainer>
        </AuthContextProvider>
    );
}

export default AppNavigation;
