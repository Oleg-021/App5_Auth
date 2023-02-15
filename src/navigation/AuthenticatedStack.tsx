import React, {useContext} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Colors} from "../util/constants/Colors";
import {WelcomeScreen} from "../screens";
import {IconButton} from "../components/ui";
import {AuthContext} from "../store/auth-context";

interface IAuthenticatedStack {
}

const Stack = createNativeStackNavigator();

const AuthenticatedStack: React.FC<IAuthenticatedStack> = () => {
    const authContext = useContext(AuthContext);

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: Colors.dark},
            headerTintColor: Colors.white,
            contentStyle: {backgroundColor: Colors.yellow},
        }}>
            <Stack.Screen name="Welcome"
                          component={WelcomeScreen}
                          options={{
                              headerRight: ({tintColor}) =>
                                  <IconButton icon="exit" color={tintColor || Colors.yellow} size={24} onPress={authContext.logout}/>
                          }}
            />
        </Stack.Navigator>
    );
}

export default AuthenticatedStack;
