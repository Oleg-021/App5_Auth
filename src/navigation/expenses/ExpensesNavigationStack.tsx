import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Colors} from "../../util/constants/Colors";
import ExpensesContextProvider from "../../store/expenses/expenses-context";
import ExpensesOverviewDrawer from "./ExpensesOverviewDrawer";
import {ManageExpenseScreen} from "../../screens/dashboard/expenses";

const Stack = createNativeStackNavigator();

interface IExpensesNavigationStack {
}

const ExpensesNavigationStack: React.FC<IExpensesNavigationStack> = () => {
    return <>
        <ExpensesContextProvider>
            <Stack.Navigator initialRouteName="ExpensesOverview"
                             screenOptions={{
                                 headerStyle: {backgroundColor: Colors.yellow500},
                                 headerTintColor: Colors.black
                             }}>
                <Stack.Screen name="ExpensesOverview"
                              component={ExpensesOverviewDrawer}
                              options={{headerShown: false}}
                />
                <Stack.Screen name="ManageExpense"
                              component={ManageExpenseScreen}
                              options={{presentation: "modal"}}
                />
            </Stack.Navigator>
        </ExpensesContextProvider>
    </>
}

export default ExpensesNavigationStack;
