import React, {useContext, useEffect, useState} from "react";
import {ExpensesContext} from "../../../store/expenses/expenses-context";
import {getDateMinusDays} from "../../../utils/dashboard/expenses/date";
import {fetchExpenses} from "../../../utils/axios/dashboard/expenses";
import {ErrorOverlay, LoadingOverlay} from "../../../components/dashboard/expenses/ui";
import {ExpensesOutput} from "../../../components/dashboard/expenses/expenses-output";

interface IRecentExpenseScreen {
}

const RecentExpensesScreen: React.FC<IRecentExpenseScreen> = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<string>();

    const expensesContext = useContext(ExpensesContext);
    const recentExpenses = expensesContext.expenses.filter(expense => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return (expense.date > date7DaysAgo) && (expense.date < today);
    });

    /* Functions */
    const errorHandler = () => {
        setError(undefined);
    }

    useEffect(() => {
        const getExpenses = async () => {
            setIsFetching(true);

            try {
                const expenses = await fetchExpenses();
                expensesContext.setExpense(expenses);
            } catch (err) {
                setError("Could not fetch expenses");
            }

            setIsFetching(false);
        }
        getExpenses().catch(err => console.log(err));
    }, [])

    // Render
    if (error && !isFetching)
        return <ErrorOverlay message={error} onConfirm={errorHandler}/>

    if (isFetching)
        return <LoadingOverlay/>;

    return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Total"
                           fallbackText="No expenses registered for the last 7 days."/>;
}

export default RecentExpensesScreen;
