import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";

import {Colors} from "../../../util/constants/Colors";

interface INumberContainer {
    children: number
}

const NumberContainer: React.FC<INumberContainer> = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 4,
        borderColor: Colors.yellow200,
        borderRadius: 10,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24
    },
    numberText: {
        color: Colors.yellow200,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontWeight: "bold"
    }
});

export default NumberContainer;
