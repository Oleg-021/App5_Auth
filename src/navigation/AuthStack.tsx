import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {LoginScreen, SignUpScreen} from "../screens";
import {Colors} from "../util/constants/Colors";

interface IAuthStack {
}

const Stack = createNativeStackNavigator()

const AuthStack: React.FC<IAuthStack> = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: Colors.gray500},
            headerTintColor: Colors.white,
            contentStyle: {backgroundColor: Colors.yellow500}
        }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    );
}

export default AuthStack;
