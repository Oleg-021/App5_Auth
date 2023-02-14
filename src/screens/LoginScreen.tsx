import React, {useState} from "react";

import {AuthContent} from "../components/auth";
import {LoadingOverlay} from "../components/ui";
import {logIn} from "../util/auth";

interface ILoginScreen {
}

const LoginScreen: React.FC<ILoginScreen> = () => {
    // State
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    // Functions
    const signInHandler = async ({email, password}: { email: string, password: string }) => {
        setIsAuthenticating(true);
        await logIn(email, password);
        setIsAuthenticating(false);
    }

    // Render
    if (isAuthenticating)
        return <LoadingOverlay message="Logging you in..."/>

    return <AuthContent isLogin={true} onAuthenticate={signInHandler}/>;
}

export default LoginScreen;
