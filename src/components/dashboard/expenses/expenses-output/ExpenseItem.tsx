import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {getFormattedDate} from "../../../../util/dashboard/expenses/date";
import {Colors} from "../../../../util/constants/Colors";

interface IExpenseItem {
    id: string,
    description: string,
    amount: number,
    date: Date
}

const ExpenseItem: React.FC<IExpenseItem> = ({id, description, amount, date}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const amountStyle = amount < 1000 ? styles.normalAmount : styles.highAmount;

    const expensePressHandler = () => {
        navigation.navigate("ManageExpense", {
            expenseId: id
        });
    }

    return (
        <Pressable style={({pressed}) => pressed ? styles.pressed : null} onPress={expensePressHandler}>
            <View style={styles.expenseItemContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={[styles.textBase]}>{getFormattedDate(date)}</Text>
                </View>

                <View style={[styles.amountContainer, amountStyle]}>
                    <Text style={[styles.amount]}>${amount}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    expenseItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.yellow500,
        borderRadius: 6,
        shadowColor: Colors.yellow500,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        elevation: 2,
        padding: 12,
        marginVertical: 8,
    },
    textContainer: {
        maxWidth: "70%"
    },
    textBase: {
        color: Colors.gray500,
    },
    description: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4
    },
    amountContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
        borderRadius: 4,
        minWidth: 80,
        paddingHorizontal: 12,
        paddingVertical: 4,

        shadowColor: Colors.black,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        elevation: 2,
    },
    amount: {
        color: Colors.gray500,
        fontWeight: "bold"
    },
    normalAmount: {
        backgroundColor: Colors.yellow200
    },
    highAmount: {
        backgroundColor: Colors.error500
    },
    pressed: {
        opacity: 0.75
    }
});

export default ExpenseItem;
