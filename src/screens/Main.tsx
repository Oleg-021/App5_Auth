import React, {useContext, useEffect, useState} from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {AuthContext} from "../store/auth-context";
import {AppNavigation} from "../navigation";
import {appBarStyle, Colors} from "../util/constants/Colors";
import {AnimatedOpacityView, LetsStartButton, TextLogo} from "../components/animated";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IRoot {
}

const Main: React.FC<IRoot> = () => {
    // State
    const [isTryingLogIn, setIsTryingLogIn] = useState(true);
    const [isLetsStart, setIsLetsStart] = useState(false);

    // Params
    const authContext = useContext(AuthContext);

    // Functions
    const letsStartHandler = () => {
        setIsLetsStart(true);
    }

    // Effects
    useEffect(() => {
        AsyncStorage.getItem("token").then(storedToken => {
            if (storedToken)
                authContext.authenticate(storedToken);
            setIsTryingLogIn(false);
        });
    }, []);

    // Render
    if (isTryingLogIn) {
        // While upload app data...
    }

    if (!isLetsStart && !authContext.token && !isTryingLogIn)
        return (
            <View style={styles.container}>
                <TextLogo text="Litvinowser" color={Colors.accent500} size={55} animationDuration={1500}/>

                <AnimatedOpacityView animationDuration={1800}>
                    <Ionicons name="desktop-outline" size={300} color={Colors.accent500}/>
                </AnimatedOpacityView>

                <AnimatedOpacityView animationDuration={2000}>
                    <Text style={styles.description}>A lot of apps in one.</Text>
                </AnimatedOpacityView>

                <LetsStartButton animationDuration={2500} onPress={letsStartHandler}/>
            </View>
        );
        // desktop-outline
        // logo-electron
        // logo-buffer
    else
        return <>
            <StatusBar backgroundColor={Colors.accent500} barStyle={appBarStyle}/>

            <AppNavigation/>
        </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.primary500,
        padding: "10%"
    },
    logoImg: {
        width: 250,
        height: 250
    },
    description: {
        color: Colors.accent500,
        fontSize: 20,
        fontStyle: "italic"
    },
});

export default Main;
