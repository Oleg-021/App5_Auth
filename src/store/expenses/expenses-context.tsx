import React, {createContext, ReactNode, useReducer} from "react";
import {Expense} from "../../models/expenses/Expense";

/* Interfaces */
interface IInput {
    description: string,
    amount: number,
    date: Date
}

interface IExpensesContext {
    expenses: Expense[],
    addExpense: ({id, amount, date, description}: Expense) => void,
    deleteExpense: (id: string) => void,
    updateExpense: (id: string, {
        description,
        amount,
        date
    }: IInput) => void,
    setExpense: (expenses: Expense[]) => void
}

interface IExpensesContextProvider {
    children: ReactNode
}

/* Functions */
export const ExpensesContext = createContext<IExpensesContext>({
    expenses: [],
    addExpense: ({id, amount, date, description}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
    setExpense: (expenses) => {}
});

const expensesReducer = (state: Expense[], action: any) => {
    switch (action.type) {
        case "ADD":
            return [{...action.payload}, ...state];
        case "UPDATE":
            const updatableExpenseIndex = state.findIndex((expense: Expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.expenseData};
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case "DELETE":
            return state.filter(expense => expense.id !== action.payload);
        case "SET":
            const inverted = action.payload.reverse();
            return inverted;
        default:
            return state;
    }
}


const ExpensesContextProvider: React.FC<IExpensesContextProvider> = ({children}) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    const addExpense = (expenseData: IInput) => {
        dispatch({type: "ADD", payload: expenseData});
    }
    const updateExpense = (id: string, expenseData: IInput) => {
        dispatch({type: "UPDATE", payload: {id, expenseData}});
    }
    const deleteExpense = (id: string) => {
        dispatch({type: "DELETE", payload: id});
    }
    const setExpense = (expenses: Expense[]) => {
        dispatch({type: "SET", payload: expenses})
    }

    const value: IExpensesContext = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
        setExpense: setExpense
    }

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>);
}

export default ExpensesContextProvider;
