import React from "react";
import {StyleSheet, Text, View} from "react-native";

interface IWelcomeScreen {
}

const WelcomeScreen: React.FC<IWelcomeScreen> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>You authenticated successfully!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    }
});

export default WelcomeScreen;
