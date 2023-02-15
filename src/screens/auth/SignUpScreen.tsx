import React, {useContext, useState} from "react";

import AuthContent from "../../components/auth/AuthContent";
import {createUser} from "../../util/axios/auth";
import {LoadingOverlay} from "../../components/ui";
import {Alert} from "react-native";
import {AuthContext} from "../../store/auth-context";
import {AnimatedOpacityView} from "../../components/animated";

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
        <AnimatedOpacityView animationDuration={2000}>
            <AuthContent isLogin={false} onAuthenticate={signUpHandler}/>
        </AnimatedOpacityView>
    </>;
}

export default SignUpScreen;
