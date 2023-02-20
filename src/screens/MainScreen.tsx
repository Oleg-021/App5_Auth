import React, {useContext, useEffect, useState} from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {AuthContext} from "../store/auth-context";
import {AppNavigation} from "../navigation";
import {Colors} from "../constants/Colors";
import {AnimatedOpacityView, LetsStartButton, TextLogo} from "../components/animated";
import Ionicons from "react-native-vector-icons/Ionicons";
import {YaMap} from "react-native-yamap";

interface IRoot {
}

const MainScreen: React.FC<IRoot> = () => {
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
        AsyncStorage.getItem("token").then( async (storedToken) => {
            let email = await AsyncStorage.getItem("email");

            if (!email)
                email = "";

            if (storedToken)
                authContext.authenticate(storedToken, email);
            setIsTryingLogIn(false);
        });

        YaMap.init("24da40b5-a8b7-47e7-896d-d59aa631de8e").catch(error => console.log("Error YaMap:", error));
        YaMap.setLocale("en_US").catch(error => console.log("Set locale error:", error));
    }, []);

    // Render
    if (isTryingLogIn) {
        // While upload dashboard dashboard...
    }

    if (!isLetsStart && !authContext.token && !isTryingLogIn)
        return (
            <View style={styles.container}>
                <TextLogo text="Litvinowser" color={Colors.gray500} size={55} animationDuration={1500}/>

                <AnimatedOpacityView animationDuration={1800}>
                    <Ionicons name="desktop-outline" size={300} color={Colors.gray500}/>
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
            <StatusBar backgroundColor={Colors.gray500} barStyle="light-content"/>

            <AppNavigation/>
        </>
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
    },
});

export default MainScreen;
