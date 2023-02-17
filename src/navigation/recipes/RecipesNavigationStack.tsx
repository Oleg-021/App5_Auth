import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider} from "react-redux";

import {store} from "../../store/recipes/store";
import {MealDetailsScreen, MealsOverviewScreen} from "../../screens/dashboard/recipes";
import RecipesDrawer from "./RecipesDrawer";
import {Colors} from "../../util/constants/Colors";

interface IRecipesNavigationStack {
}

const Stack = createNativeStackNavigator();

const RecipesNavigationStack: React.FC<IRecipesNavigationStack> = () => {
    return <>
        <Provider store={store}>
            <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: Colors.gray500},
                headerTintColor: Colors.yellow500,
                contentStyle: {backgroundColor: Colors.yellow500}
            }}>
                <Stack.Screen name="DrawerCategories"
                              component={RecipesDrawer}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name="MealsOverview"
                              component={MealsOverviewScreen}
                    /*options={({route, navigation}) => {
                        const categoryId = route.params?.categoryId;
                        return {
                            title: categoryId
                        };
                    }}*//>
                <Stack.Screen name="MealDetail"
                              component={MealDetailsScreen}
                />
            </Stack.Navigator>
        </Provider>
    </>;
}

export default RecipesNavigationStack;
