import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

import {Colors} from "../util/constants/Colors";
import {WelcomeScreen} from "../screens";

interface IAuthenticatedStack {
}

const Stack = createNativeStackNavigator();

const AuthenticatedStack: React.FC<IAuthenticatedStack> = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: Colors.primary100},
        }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        </Stack.Navigator>
    );
}

export default AuthenticatedStack;
