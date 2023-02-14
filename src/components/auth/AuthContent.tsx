import React, {useState} from "react";
import {View, StyleSheet, Alert} from "react-native";
import {CredentialsInvalid} from "../../util/types/CredentialsInvalid";
import {Credentials} from "../../util/types/Credentials";
import {Colors} from "../../util/constants/Colors";
import {FlatButton} from "../ui";
import AuthForm from "./AuthForm";

interface IAuthContent {
    isLogin: boolean,
    onAuthenticate: (inputData: { email: string, password: string }) => void
}

const AuthContent: React.FC<IAuthContent> = ({isLogin, onAuthenticate}) => {
    // State
    const [credentialsInvalid, setCredentialsInvalid] = useState<CredentialsInvalid>({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false
    });

    // Params

    // Functions
    function switchAuthModeHandler() {
        // Todo
    }

    function submitHandler(credentials: Credentials) {
        let {email, confirmEmail, password, confirmPassword} = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;

        if (
            !emailIsValid ||
            !passwordIsValid ||
            (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
                confirmEmail: !emailIsValid || !emailsAreEqual,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
            });
            return;
        }
        onAuthenticate({email, password});
    }

    // Effects

    // Render
    return (
        <View style={styles.container}>
            <AuthForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
            />
            <View style={styles.buttons}>
                <FlatButton onPress={switchAuthModeHandler}>
                    {isLogin ? 'Create a new user' : 'Log in instead'}
                </FlatButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.35,
        shadowRadius: 4,
    },
    buttons: {
        marginTop: 8,
    }
});

export default AuthContent;
