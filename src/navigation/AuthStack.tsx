import React from "react";
import {StyleSheet} from "react-native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {LoginScreen, SignUpScreen} from "../screens";
import {Colors} from "../util/constants/Colors";

interface IAuthStack {
}

const Stack = createNativeStackNavigator()

const AuthStack: React.FC<IAuthStack> = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: Colors.primary100},
        }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignUpScreen}/>
        </Stack.Navigator>
    );
}

export default AuthStack;
