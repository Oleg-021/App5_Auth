import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";

import {Expense} from "../../../../models/expenses/Expense";
import {getFormattedDate} from "../../../../utils/dashboard/expenses/date";
import Input from "./Input";
import {Button} from "../ui";
import {Colors} from "../../../../constants/Colors";

interface IExpenseForm {
    onCancel: () => void,
    onSubmit: (expenseData: { amount: number, date: Date, description: string }) => void,
    submitButtonLabel: string,
    defaultValues?: Expense
}

const ExpenseForm: React.FC<IExpenseForm> = ({onCancel, onSubmit, submitButtonLabel, defaultValues}) => {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : "",
            isValid: true
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : "",
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : "",
            isValid: true
        }
    });

    const inputChangedHandler = (inputIdentifier: "amount" | "date" | "description", enteredValue: string) => {
        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                [inputIdentifier]: {value: enteredValue, isValid: true}
            };
        });
    }

    const submitHandler = () => {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== "Invalid Date";
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs((prevInputs) => {
                return {
                    amount: {value: prevInputs.amount.value, isValid: amountIsValid},
                    date: {value: prevInputs.date.value, isValid: dateIsValid},
                    description: {value: prevInputs.description.value, isValid: descriptionIsValid}
                }
            })
            return;
        }

        onSubmit(expenseData);
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Expense</Text>

            <View style={styles.inputsRow}>
                <Input style={styles.rowInput} label="Amount" invalid={!inputs.amount.isValid} textInputConfig={{
                    keyboardType: "decimal-pad",
                    value: inputs.amount.value,
                    onChangeText: inputChangedHandler.bind(this, "amount")
                }}/>
                <Input style={styles.rowInput} label="Date" invalid={!inputs.date.isValid} textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    value: inputs.date.value,
                    onChangeText: inputChangedHandler.bind(this, "date")
                }}/>
            </View>

            <Input label="Description" invalid={!inputs.description.isValid} textInputConfig={{
                multiline: true,
                value: inputs.description.value,
                onChangeText: inputChangedHandler.bind(this, "description")
            }}/>

            {formIsInvalid && <Text style={styles.errorText}>Invalid input values - check your entered data!</Text>}

            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode="button"
                        onPress={submitHandler}>{submitButtonLabel}</Button>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    title: {
        textAlign: "center",
        color: Colors.yellow500,
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 24
    },
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowInput: {
        flex: 1
    },
    errorText: {
        textAlign: "center",
        color: Colors.error500,
        margin: 8
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
});

export default ExpenseForm;
