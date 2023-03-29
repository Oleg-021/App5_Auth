import React, {memo} from "react";
import {StyleSheet, Text, View} from "react-native";

import {Colors} from "../../../constants/Colors";

interface IMealDetails {
    duration: string,
    complexity: string,
    affordability: string,
    style?: object,
    textStyle?: object
}

const MealDetails: React.FC<IMealDetails> = ({duration, complexity, affordability, style, textStyle}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    detailItem: {
        color: Colors.black,
        fontSize: 12,
        marginHorizontal: 4,
    }
});

export default memo(MealDetails);
