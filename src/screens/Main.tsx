import React, {useContext, useEffect, useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {AuthContext} from "../store/auth-context";
import {AppNavigation} from "../navigation";
import {Colors} from "../util/constants/Colors";
import {AnimatedOpacityView, LetsStartButton, TextLogo} from "../components/animated";

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

    if (!isLetsStart)
        return (
            <View style={styles.container}>
                <TextLogo text="Litvinowser" color={Colors.dark} size={55} animationDuration={1500}/>

                <AnimatedOpacityView animationDuration={1800}>
                    <Image style={styles.logoImg} source={require("../assets/img/main_logo.png")}/>
                </AnimatedOpacityView>

                <AnimatedOpacityView animationDuration={2000}>
                    <Text style={styles.description}>A lot of apps in one.</Text>
                </AnimatedOpacityView>

                <LetsStartButton animationDuration={2500} onPress={letsStartHandler}/>
            </View>
        );
    else
        return <AppNavigation/>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.yellow,
        padding: "5%"
    },
    logoImg: {
        width: 250,
        height: 250
    },
    description: {
        color: Colors.gray,
        fontSize: 20,
        fontStyle: "italic"
    },
});

export default Main;
