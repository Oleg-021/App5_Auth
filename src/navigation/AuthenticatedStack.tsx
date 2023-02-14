import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Colors} from "../util/constants/Colors";
import {WelcomeScreen} from "../screens";

interface IAuthenticatedStack {
}

const Stack = createNativeStackNavigator();

const AuthenticatedStack: React.FC<IAuthenticatedStack> = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: Colors.dark},
            headerTintColor: Colors.white,
            contentStyle: {backgroundColor: Colors.yellow},
        }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        </Stack.Navigator>
    );
}

export default AuthenticatedStack;
