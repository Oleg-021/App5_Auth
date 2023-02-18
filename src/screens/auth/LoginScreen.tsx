import React, {useContext, useState} from "react";
import {Alert} from "react-native";

import {AuthContent} from "../../components/auth";
import {LoadingOverlay} from "../../components/ui";
import {logIn} from "../../util/axios/auth/auth";
import {AuthContext} from "../../store/auth-context";
import {AnimatedBottomAppearanceView, AnimatedOpacityView} from "../../components/animated";
import Logo from "../../components/auth/Logo";

interface ILoginScreen {
}

const LoginScreen: React.FC<ILoginScreen> = () => {
    // State
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    // Params
    const authContext = useContext(AuthContext);

    // Functions
    const signInHandler = async ({email, password}: { email: string, password: string }) => {
        setIsAuthenticating(true);
        try {
            const token = await logIn(email, password);
            authContext.authenticate(token);
        } catch (error) {
            Alert.alert("Authentication failed!", "Could not log you in. Check your credentials. or try again later");
            setIsAuthenticating(false);
        }
    }

    // Render
    if (isAuthenticating)
        return <LoadingOverlay message="Logging you in..."/>

    return <>
        <AnimatedOpacityView animationDuration={1500}>
            <Logo/>
        </AnimatedOpacityView>

        <AnimatedBottomAppearanceView animationDuration={2500}>
            <AuthContent isLogin={true} onAuthenticate={signInHandler}/>
        </AnimatedBottomAppearanceView>
    </>

}

export default LoginScreen;
