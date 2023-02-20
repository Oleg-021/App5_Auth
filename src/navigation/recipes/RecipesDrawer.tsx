import React from "react";
import {Text} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";

import {Colors} from "../../constants/Colors";
import {CategoriesScreen, FavoritesScreen} from "../../screens/dashboard/recipes";

interface IRecipesDrawer {
}

const Drawer = createDrawerNavigator();

const RecipesDrawer: React.FC<IRecipesDrawer> = () => {
    return <>
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: Colors.gray500},
            headerTintColor: Colors.yellow500,
            sceneContainerStyle: {backgroundColor: Colors.yellow500},
            drawerContentStyle: {backgroundColor: Colors.gray500},
            drawerActiveTintColor: Colors.gray500,
            drawerActiveBackgroundColor: Colors.yellow500,
            drawerInactiveTintColor: "white"
        }}>
            <Drawer.Screen name="Categories"
                           component={CategoriesScreen}
                           options={{
                               title: "All Categories",
                               drawerIcon: ({color, size}) => <Text style={{color: color, fontSize: size}}>≡</Text>
                           }}/>
            <Drawer.Screen name="Favorites"
                           component={FavoritesScreen}
                           options={{
                               drawerIcon: ({color, size}) => <Text style={{color: color, fontSize: size}}>★</Text>
                           }}/>
        </Drawer.Navigator>
    </>;
}

export default RecipesDrawer;
