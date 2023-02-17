import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {Colors} from "../../../../util/constants/Colors";

interface ISubtitle {
    children?: string
}

const Subtitle: React.FC<ISubtitle> = ({children}) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        marginVertical: 4,
        marginHorizontal: "4%",
        borderBottomColor: Colors.gray500,
        borderBottomWidth: 2
    },
    subtitle: {
        textAlign: "center",
        color: Colors.gray500,
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default Subtitle;
