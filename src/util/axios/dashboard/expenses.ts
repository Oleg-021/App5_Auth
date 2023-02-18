import axios from "axios";
import {Expense} from "../../../models/expenses/Expense";

const FIREBASE_DATABASE_URL = "https://expensestracker-5f649-default-rtdb.europe-west1.firebasedatabase.app";

export const storeExpense = async (expenseData: { amount: number, date: Date, description: string }) => {
    const response = await axios.post(FIREBASE_DATABASE_URL + "/expenses.json", expenseData);

    const id = response.data.name; // get id of added expense (field "name" is "id")
    return id;
}

export const fetchExpenses = async () => {
    const response = await axios.get(FIREBASE_DATABASE_URL + "/expenses.json");

    const expenses: Expense[] = [];

    for (const key in response.data) {
        const expense: Expense = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expense);
    }

    return expenses;
}

export const updateExpense = (id: string, expenseData: { amount: number, date: Date, description: string }) => {
    return axios.put(FIREBASE_DATABASE_URL + `/expenses/${id}.json`, expenseData);
}

export const deleteExpense = (id: string) => {
    return axios.delete(FIREBASE_DATABASE_URL + `/expenses/${id}.json`);
}
