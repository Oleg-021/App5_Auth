import React, {useContext} from "react";

import {ExpensesContext} from "../../../store/expenses/expenses-context";
import {ExpensesOutput} from "../../../components/dashboard/expenses/expenses-output";

interface IAllExpensesScreen {
}

const AllExpensesScreen: React.FC<IAllExpensesScreen> = () => {
    const expensesContext = useContext(ExpensesContext);

    return <ExpensesOutput expenses={expensesContext.expenses} expensesPeriod="Total"
                           fallbackText="No expenses registered found."/>;
}

export default AllExpensesScreen;
