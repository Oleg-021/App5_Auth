import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {Expense} from "../../../../models/expenses/Expense";
import {Colors} from "../../../../util/constants/Colors";

interface IExpensesSummary {
    periodName: string,
    expenses: Expense[]
}

const ExpensesSummary: React.FC<IExpensesSummary> = ({periodName, expenses}) => {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.yellow200,
        borderRadius: 6,
        padding: 8,
        marginBottom: 1
    },
    period: {
        color: Colors.gray700,
        fontSize: 12,
    },
    sum: {
        color: Colors.gray500,
        fontSize: 16,
        fontWeight: "bold",
    }
});

export default ExpensesSummary;
