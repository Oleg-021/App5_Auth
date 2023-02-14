import React from "react";
import {NavigationContainer} from "@react-navigation/native";

import AuthStack from "./AuthStack";

interface IAppNavigation {
}

const AppNavigation: React.FC<IAppNavigation> = () => {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
}

export default AppNavigation;
