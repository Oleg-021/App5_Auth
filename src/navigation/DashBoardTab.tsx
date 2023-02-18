import React, {useContext} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import {Colors} from "../util/constants/Colors";
import {WelcomeScreen} from "../screens";
import {IconButton} from "../components/ui";
import {AuthContext} from "../store/auth-context";
import GuessNumberApp from "../screens/dashboard/game/GuessNumberApp";
import RecipesNavigationStack from "./recipes/RecipesNavigationStack";
import ExpensesNavigationStack from "./expenses/ExpensesNavigationStack";

interface IDashBoardTab {
}

const Tab = createBottomTabNavigator();

const DashBoardTab: React.FC<IDashBoardTab> = () => {
    const authContext = useContext(AuthContext);

    return <>
        <Tab.Navigator screenOptions={{
            headerStyle: {backgroundColor: Colors.gray500},
            headerTintColor: Colors.white,
            tabBarStyle: {backgroundColor: Colors.gray500, borderTopWidth: 0, borderBottomWidth: 0},
            tabBarActiveTintColor: Colors.yellow500,
            tabBarInactiveTintColor: Colors.gray200,
        }}>
            <Tab.Screen name="Welcome"
                        component={WelcomeScreen}
                        options={{
                            headerRight: ({tintColor}) => <IconButton icon="exit" color={tintColor || Colors.yellow500}
                                                                      size={24} onPress={authContext.logout}/>,
                            tabBarIcon: ({color, size}) => <Ionicons name="hand-right-outline" color={color}
                                                                     size={size}/>
                        }}
            />
            <Tab.Screen name="Game"
                        component={GuessNumberApp}
                        options={{
                            tabBarIcon: ({color, size}) => <Ionicons name="game-controller-outline" color={color}
                                                                     size={size}/>,
                            headerShown: false
                        }}
            />
            <Tab.Screen name="Recipes"
                        component={RecipesNavigationStack}
                        options={{
                            tabBarIcon: ({color, size}) => <Ionicons name="pizza-outline" color={color}
                                                                     size={size}/>,
                            headerShown: false
                        }}
            />
            <Tab.Screen name="Expenses"
                        component={ExpensesNavigationStack}
                        options={{
                            tabBarStyle: {backgroundColor: Colors.yellow500, borderTopWidth: 0, borderBottomWidth: 0},
                            tabBarActiveTintColor: Colors.gray700,
                            tabBarInactiveTintColor: Colors.gray400,
                            tabBarIcon: ({color, size}) => <Ionicons name="card-outline" color={color}
                                                                     size={size}/>,
                            headerShown: false
                        }}
            />
        </Tab.Navigator>
    </>;
}

export default DashBoardTab;
