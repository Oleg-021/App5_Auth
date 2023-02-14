import React from "react";
import {StyleSheet} from "react-native";
import AuthContent from "../components/auth/AuthContent";

interface ISignUpScreen {
}

const SignUpScreen: React.FC<ISignUpScreen> = () => {
    return <AuthContent isLogin={false} onAuthenticate={({email, password}) => {}}/>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SignUpScreen;
