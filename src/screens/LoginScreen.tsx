import React from "react";
import {StyleSheet} from "react-native";
import {AuthContent} from "../components/auth";

interface ILoginScreen {
}

const LoginScreen: React.FC<ILoginScreen> = () => {
    return <AuthContent isLogin={true} onAuthenticate={({email, password}) => {}}/>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default LoginScreen;
