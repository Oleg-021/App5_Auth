import React, {useState} from "react";
import {StatusBar} from "react-native";

import {AppNavigation} from "../navigation";
import {Colors} from "../constants/Colors";
import useYaMap from "../hooks/useYaMap";
import WelcomeScreen from "./WelcomeScreen";
import useAuth from "../hooks/useAuth";

interface IRoot {}

const MainScreen: React.FC<IRoot> = () => {
    const [isLetsStart, setIsLetsStart] = useState(false);

    useYaMap("24da40b5-a8b7-47e7-896d-d59aa631de8e");
    const isAuth = useAuth();

    const letsStartHandler = () => {
        setIsLetsStart(true);
    }

    if (!isLetsStart && !isAuth)
        return <WelcomeScreen onLetsStart={letsStartHandler}/>
    else
        return <>
            <StatusBar backgroundColor={Colors.gray500} barStyle="light-content"/>
            <AppNavigation/>
        </>
}

export default MainScreen;
