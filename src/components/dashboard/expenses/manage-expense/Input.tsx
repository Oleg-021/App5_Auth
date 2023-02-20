import React from "react";
import {StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";

import {Colors} from "../../../../constants/Colors";


interface IInput {
    label: string,
    invalid: boolean,
    style?: object,
    textInputConfig: TextInputProps
}

const Input: React.FC<IInput> = ({label, invalid, style, textInputConfig}) => {
    const inputStyles: object[] = [styles.input];

    if (textInputConfig && textInputConfig.multiline)
        inputStyles.push(styles.inputMultiline);

    if (invalid)
        inputStyles.push(styles.invalidInput);

    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        color: Colors.yellow200,
        fontSize: 13,
        marginBottom: 4
    },
    input: {
        backgroundColor: Colors.yellow200,
        color: Colors.gray500,
        fontSize: 18,
        borderRadius: 6,
        padding: 6
    },
    inputMultiline: {
        textAlignVertical: "top",
        minHeight: 100
    },
    invalidLabel: {
        color: Colors.error500
    },
    invalidInput: {
        backgroundColor: Colors.error50
    }
});

export default Input;
