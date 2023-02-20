import React from "react";
import {Platform, StyleSheet, Text} from "react-native";
import {Colors} from "../../../../constants/Colors";

interface ITitle {
    children: string
}

const Title: React.FC<ITitle> = ({children}) => {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        color: Platform.select({android: Colors.yellow500, ios: Colors.yellow200}),
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 3,
        borderColor: Platform.OS === "android" ? Colors.yellow500 : Colors.yellow200,
        borderRadius: 10,
        padding: 12,
        width: 300,
        maxWidth: "80%"
    }
});

export default Title;
