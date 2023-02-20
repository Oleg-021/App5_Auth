import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import {Colors} from "../../constants/Colors";
import {IconButton} from "../../components/dashboard/expenses/ui";
import {AllExpensesScreen, RecentExpensesScreen} from "../../screens/dashboard/expenses";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IExpensesOverviewDrawer {
}

const Drawer = createDrawerNavigator();

const ExpensesOverviewDrawer: React.FC<IExpensesOverviewDrawer> = () => {
    return <>
        <Drawer.Navigator screenOptions={({navigation}) => {
            return {
                headerStyle: {backgroundColor: Colors.yellow500},
                headerTintColor: Colors.gray500,
                sceneContainerStyle: {backgroundColor: Colors.yellow500},
                drawerContentStyle: {backgroundColor: Colors.gray500},
                drawerActiveTintColor: Colors.gray500,
                drawerActiveBackgroundColor: Colors.yellow500,
                drawerInactiveTintColor: "white",
                headerRight: ({tintColor}) => <IconButton icon="add"
                                                          size={24}
                                                          color={tintColor}
                                                          onPress={() => {
                                                              navigation.navigate("ManageExpense")
                                                          }}/>
            };
        }}>
            <Drawer.Screen name="RecentExpenses"
                           component={RecentExpensesScreen}
                           options={{
                               title: "Recent Expenses",
                               drawerIcon: ({color, size}) => <Ionicons name="hourglass"
                                                                        size={size}
                                                                        color={color}/>
                           }}
            />
            <Drawer.Screen name="AllExpenses"
                           component={AllExpensesScreen}
                           options={{
                               title: "All Expenses",
                               drawerIcon: ({color, size}) => <Ionicons name="calendar"
                                                                        size={size}
                                                                        color={color}
                               />
                           }}/>
        </Drawer.Navigator>
    </>;
}

export default ExpensesOverviewDrawer;
