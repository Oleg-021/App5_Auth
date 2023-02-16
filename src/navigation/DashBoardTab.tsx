import React, {useContext} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import {Colors} from "../util/constants/Colors";
import {WelcomeScreen} from "../screens";
import {IconButton} from "../components/ui";
import {AuthContext} from "../store/auth-context";
import GuessNumberApp from "../screens/app/game/GuessNumberApp";

interface IDashBoardTab {
}

const Tab = createBottomTabNavigator();

const DashBoardTab: React.FC<IDashBoardTab> = () => {
    const authContext = useContext(AuthContext);

    return (
        <Tab.Navigator screenOptions={{
            headerStyle: {backgroundColor: Colors.dark},
            headerTintColor: Colors.white,
            tabBarStyle: {backgroundColor: Colors.dark, borderTopWidth: 0, borderBottomWidth: 0},
            tabBarActiveTintColor: Colors.yellow,
            tabBarInactiveTintColor: Colors.lightGray,
        }}>
            <Tab.Screen name="Welcome"
                        component={WelcomeScreen}
                        options={{
                            headerRight: ({tintColor}) => <IconButton icon="exit" color={tintColor || Colors.yellow}
                                                                      size={24} onPress={authContext.logout}/>,
                            tabBarIcon: ({color, size}) => <Ionicons name="hand-right-outline" color={color} size={size}/>
                        }}
            />
            <Tab.Screen name="Guess number"
                        component={GuessNumberApp}
                        options={{
                            tabBarIcon: ({color, size}) => <Ionicons name="game-controller-outline" color={color} size={size}/>
                        }}

            />
        </Tab.Navigator>
    );
}

export default DashBoardTab;
