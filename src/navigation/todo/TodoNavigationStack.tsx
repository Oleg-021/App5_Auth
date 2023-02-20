import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from "react-native";

import TodoInputScreen from "../../screens/dashboard/todo/TodoInputScreen";
import TodoScreen from "../../screens/dashboard/todo/TodoScreen";
import {Colors} from "../../constants/Colors";

interface ITodoNavigationStack {
}

const Stack = createNativeStackNavigator();

const TodoNavigationStack: React.FC<ITodoNavigationStack> = () => {
    return <>
        <StatusBar backgroundColor={Colors.gray500} barStyle="light-content"/>

        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Todo"} component={TodoScreen}/>
            <Stack.Screen name={"TodoInput"} component={TodoInputScreen}/>
        </Stack.Navigator>
    </>;
}

export default TodoNavigationStack;
