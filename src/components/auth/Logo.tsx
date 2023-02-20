import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import {Colors} from "../../constants/Colors";

interface ILogo {
}

const Logo: React.FC<ILogo> = () => {
    return (
        <View style={styles.logoContainer}>
            <Ionicons name="desktop-outline" size={100} color={Colors.gray500}/>
            <Text style={styles.logoText}>Litvinowser</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        width: "100%",
        alignItems: "center",
    },
    logoText: {
        color: Colors.gray500,
        fontSize: 33,
        fontWeight: "bold",
    }
});

export default Logo;
