import React from "react";
import {StyleSheet, Text, View} from "react-native";

import Button from "./Button";
import {Colors} from "../../../../util/constants/Colors";

interface IErrorOverlay {
    message: string,
    onConfirm: () => void
}

const ErrorOverlay: React.FC<IErrorOverlay> = ({message, onConfirm}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occurred!</Text>
            <Text style={styles.text}>{message}</Text>
            <Button onPress={onConfirm}>Okay</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: Colors.gray500
    },
    text: {
        textAlign: "center",
        color: Colors.white,
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default ErrorOverlay;
