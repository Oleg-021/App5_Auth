import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {Expense} from "../../../../models/expenses/Expense";
import ExpensesList from "./ExpensesList";
import {Colors} from "../../../../util/constants/Colors";
import ExpensesSummary from "./ExpensesSummary";

interface IExpensesOutput {
    expenses: Expense[],
    expensesPeriod: string,
    fallbackText: string
}

const ExpensesOutput: React.FC<IExpensesOutput> = ({expenses, expensesPeriod, fallbackText}) => {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary periodName={expensesPeriod} expenses={expenses}/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray500,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 40
    },
    infoText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        marginTop: 32
    }
});

export default ExpensesOutput;
