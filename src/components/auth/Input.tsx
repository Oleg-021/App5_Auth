import React from "react";
import {KeyboardType, StyleSheet, Text, TextInput, View} from "react-native";

import {Colors} from "../../util/constants/Colors";

interface IInput {
    label: string,
    keyboardType?: KeyboardType,
    secure?: boolean,
    onUpdateValue: (text: string) => void,
    value: string,
    isInvalid: boolean
}

const Input: React.FC<IInput> = ({label, keyboardType, secure, onUpdateValue, value, isInvalid}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
            <TextInput style={[styles.input, isInvalid && styles.inputInvalid]}
                       autoCapitalize="none"
                       autoCorrect={false}
                       keyboardType={keyboardType}
                       secureTextEntry={secure}
                       onChangeText={onUpdateValue}
                       value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    label: {
        color: Colors.white,
        marginBottom: 4,
    },
    labelInvalid: {
        color: Colors.error500,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: Colors.white,
        borderRadius: 4,
        fontSize: 16,
    },
    inputInvalid: {
        backgroundColor: Colors.error50,
    }
});

export default Input;
