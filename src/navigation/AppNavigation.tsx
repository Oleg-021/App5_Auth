import React, {useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";

import {AuthContext} from "../store/auth-context";
import {AuthenticatedStack, AuthStack} from "./index";

interface IAppNavigation {
}

const AppNavigation: React.FC<IAppNavigation> = () => {
    const authContext = useContext(AuthContext);

    return (
        <NavigationContainer>
            {authContext.isAuthenticated ? <AuthenticatedStack/> : <AuthStack/>}
        </NavigationContainer>
    );
}

export default AppNavigation;
