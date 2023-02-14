import React, {useState} from "react";

import {AuthContent} from "../components/auth";
import {LoadingOverlay} from "../components/ui";
import {logIn} from "../util/auth";
import {Alert} from "react-native";

interface ILoginScreen {
}

const LoginScreen: React.FC<ILoginScreen> = () => {
    // State
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    // Functions
    const signInHandler = async ({email, password}: { email: string, password: string }) => {
        setIsAuthenticating(true);
        try {
            await logIn(email, password);
        } catch (error) {
            Alert.alert("Authentication failed!", "Could not log you in. Check your credentials. or try again later");
        }
        setIsAuthenticating(false);
    }

    // Render
    if (isAuthenticating)
        return <LoadingOverlay message="Logging you in..."/>

    return <AuthContent isLogin={true} onAuthenticate={signInHandler}/>;
}

export default LoginScreen;
