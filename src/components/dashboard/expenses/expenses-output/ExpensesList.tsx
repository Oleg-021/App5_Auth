import React from "react";
import {FlatList, ListRenderItemInfo, View} from "react-native";

import {Expense} from "../../../../models/expenses/Expense";
import ExpenseItem from "./ExpenseItem";

interface IExpensesList {
    expenses: Expense[]
}

const ExpensesList: React.FC<IExpensesList> = ({expenses}) => {
    const renderExpenseItem = (itemData: ListRenderItemInfo<Expense>) => {
        return <ExpenseItem {...itemData.item}/>
    }

    return (
        <View>
            <FlatList data={expenses}
                      renderItem={renderExpenseItem}
                      keyExtractor={expense => expense.id}
            />
        </View>
    );
}

export default ExpensesList;
