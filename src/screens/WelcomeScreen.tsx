import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import {AnimatedOpacityView, LetsStartButton, TextLogo} from "../components/animated";
import {Colors} from "../constants/Colors";

interface IWelcomeScreen {
    onLetsStart: () => void
}

const WelcomeScreen: React.FC<IWelcomeScreen> = ({onLetsStart}) => {
    return (
        <View style={styles.container}>
            <TextLogo text="Litvinowser" color={Colors.gray500} size={55} animationDuration={1500}/>

            <AnimatedOpacityView animationDuration={1800}>
                <Ionicons name="desktop-outline" size={300} color={Colors.gray500}/>
            </AnimatedOpacityView>

            <AnimatedOpacityView animationDuration={2000}>
                <Text style={styles.description}>A lot of apps in one.</Text>
            </AnimatedOpacityView>

            <LetsStartButton animationDuration={2500} onPress={onLetsStart}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.yellow500,
        padding: "10%"
    },
    logoImg: {
        width: 250,
        height: 250
    },
    description: {
        color: Colors.gray500,
        fontSize: 20,
        fontStyle: "italic"
    }
});

export default WelcomeScreen;