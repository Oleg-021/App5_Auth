import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";

import {Colors} from "../../../../util/constants/Colors";

interface ICard {
    children: React.ReactNode
}

const Card: React.FC<ICard> = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.gray500,
        borderRadius: 8,
        elevation: 8, // shadow styling for android
        shadowColor: "black", // shadow styling for ios
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.3
    }
});

export default Card;
