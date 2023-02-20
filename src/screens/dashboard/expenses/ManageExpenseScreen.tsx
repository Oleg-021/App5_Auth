import React, {useContext, useLayoutEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import {NavigationProp, RouteProp} from "@react-navigation/native";

import {ExpensesContext} from "../../../store/expenses/expenses-context";
import {deleteExpense, storeExpense, updateExpense} from "../../../util/axios/dashboard/expenses";
import {ErrorOverlay, IconButton, LoadingOverlay} from "../../../components/dashboard/expenses/ui";
import ExpenseForm from "../../../components/dashboard/expenses/manage-expense/ExpenseForm";
import {Colors} from "../../../constants/Colors";

interface IManageExpenseScreen {
    navigation: NavigationProp<any>,
    route: RouteProp<any>
}

const ManageExpenseScreen: React.FC<IManageExpenseScreen> = ({navigation, route}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string>();
    const expensesContext = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    const selectedExpense = expensesContext.expenses.find(expense => expense.id === editedExpenseId);

    /* Functions */
    const confirmHandler = async (expenseData: { amount: number, date: Date, description: string }) => {
        setIsSubmitting(true);
        try {
            if (isEditing) {
                expensesContext.updateExpense(editedExpenseId, expenseData);
                await updateExpense(editedExpenseId, expenseData);
            } else {
                const id = await storeExpense(expenseData);
                expensesContext.addExpense({...expenseData, id: id});
            }
            navigation.goBack();
        } catch (err) {
            setError("Could not add expense - try again later.");
            setIsSubmitting(false);
        }
    }

    const deleteExpenseHandler = async () => {
        setIsSubmitting(true);
        try {
            await deleteExpense(editedExpenseId);
            expensesContext.deleteExpense(editedExpenseId);
            navigation.goBack();
        } catch (err) {
            setError("Could not delete expense - try again later.");
            setIsSubmitting(false);
        }
    }

    const cancelHandler = () => {
        navigation.goBack();
    }

    const errorHandler = () => {
        setError(undefined);
    }

    /* Effects */
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        });
    }, [navigation, isEditing]);

    /* Render */
    if (error && !isSubmitting)
        return <ErrorOverlay message={error} onConfirm={errorHandler}/>

    if (isSubmitting)
        return <LoadingOverlay/>

    return <>
        <View style={styles.container}>
            <ExpenseForm onCancel={cancelHandler}
                         onSubmit={confirmHandler}
                         submitButtonLabel={isEditing ? "Update" : "Add"}
                         defaultValues={selectedExpense}
            />

            {isEditing &&
                <View style={styles.deleteContainer}>
                    <IconButton icon="trash" size={36} color={Colors.error500} onPress={deleteExpenseHandler}/>
                </View>}
        </View>
    </>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray500,
        padding: 24
    },
    deleteContainer: {
        alignItems: "center",
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: Colors.yellow200
    }
});

export default ManageExpenseScreen;
