import React from "react";

import AuthStack from "./AuthStack";
import {NavigationContainer} from "@react-navigation/native";

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
