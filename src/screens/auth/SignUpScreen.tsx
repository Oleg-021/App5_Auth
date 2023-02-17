import React, {useContext, useState} from "react";
import {Alert} from "react-native";

import AuthContent from "../../components/auth/AuthContent";
import {createUser} from "../../util/axios/auth";
import {LoadingOverlay} from "../../components/ui";
import {AuthContext} from "../../store/auth-context";
import {AnimatedBottomAppearanceView, AnimatedOpacityView} from "../../components/animated";
import Logo from "../../components/auth/Logo";

interface ISignUpScreen {
}

const SignUpScreen: React.FC<ISignUpScreen> = () => {
    // State
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    // Params
    const authContext = useContext(AuthContext);

    // Functions
    const signUpHandler = async ({email, password}: { email: string, password: string }) => {
        setIsAuthenticating(true);
        try {
            const token = await createUser(email, password);
            authContext.authenticate(token);
        } catch (error) {
            Alert.alert("Authentication failed", "Could not create user. Check your input and try again later.");
            setIsAuthenticating(false);
        }
    }

    // Render
    if (isAuthenticating)
        return <LoadingOverlay message="Creating user..."/>

    return <>
        <AnimatedOpacityView animationDuration={1500}>
            <Logo/>
        </AnimatedOpacityView>

        <AnimatedBottomAppearanceView animationDuration={2500}>
            <AuthContent isLogin={false} onAuthenticate={signUpHandler}/>
        </AnimatedBottomAppearanceView>
    </>;
}

export default SignUpScreen;
