import React from "react";
import {Platform, StyleSheet, Text} from "react-native";
import {Colors} from "../../../../util/constants/Colors";

interface ITitle {
    children: string
}

const Title: React.FC<ITitle> = ({children}) => {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        color: Platform.select({android: Colors.game.yellow, ios: Colors.game.white}),
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 3,
        borderColor: Platform.OS === "android" ? Colors.game.yellow : Colors.game.white,
        borderRadius: 10,
        padding: 12,
        width: 300,
        maxWidth: "80%"
    }
});

export default Title;
