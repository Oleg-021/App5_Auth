import React, {useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";

import {AuthContext} from "../store/auth-context";
import {DashBoardTab, AuthStack} from "./index";

interface IAppNavigation {
}

const AppNavigation: React.FC<IAppNavigation> = () => {
    const authContext = useContext(AuthContext);

    return (
        <NavigationContainer>
            {authContext.isAuthenticated ? <DashBoardTab/> : <AuthStack/>}
        </NavigationContainer>
    );
}

export default AppNavigation;
