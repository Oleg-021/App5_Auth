import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import TodoInputScreen from "../../screens/dashboard/todo/TodoInputScreen";
import TodoScreen from "../../screens/dashboard/todo/TodoScreen";

interface ITodoNavigationStack {
}

const Stack = createNativeStackNavigator();

const TodoNavigationStack: React.FC<ITodoNavigationStack> = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Todo"} component={TodoScreen}/>
            <Stack.Screen name={"TodoInput"} component={TodoInputScreen}/>
        </Stack.Navigator>
    );
}

export default TodoNavigationStack;
