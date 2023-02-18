import React, {useState} from "react";
import {StyleSheet, View} from "react-native";

import {Button} from "../ui";
import Input from "./Input";
import {CredentialsInvalid} from "../../models/auth/CredentialsInvalid";
import {Credentials} from "../../models/auth/Credentials";

interface IAuthForm {
    isLogin: boolean,
    onSubmit: (inputData: Credentials) => void,
    credentialsInvalid: CredentialsInvalid
}

const AuthForm: React.FC<IAuthForm> = ({isLogin, onSubmit, credentialsInvalid}) => {
    // State
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

    // Params
    const {
        email: emailIsInvalid,
        confirmEmail: emailsDontMatch,
        password: passwordIsInvalid,
        confirmPassword: passwordsDontMatch,
    } = credentialsInvalid;

    // Functions
    function updateInputValueHandler(inputType: string, enteredValue: string) {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case 'confirmEmail':
                setEnteredConfirmEmail(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredValue);
                break;
            case 'confirmPassword':
                setEnteredConfirmPassword(enteredValue);
                break;
        }
    }

    function submitHandler() {
        onSubmit({
            email: enteredEmail,
            confirmEmail: enteredConfirmEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
        });
    }

    // Effects

    // Render
    return (
        <View style={styles.form}>
            <View>
                <Input
                    label="Email Address"
                    onUpdateValue={updateInputValueHandler.bind(this, 'email')}
                    value={enteredEmail}
                    keyboardType="email-address"
                    isInvalid={emailIsInvalid}
                />
                {!isLogin && (
                    <Input
                        label="Confirm Email Address"
                        onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
                        value={enteredConfirmEmail}
                        keyboardType="email-address"
                        isInvalid={emailsDontMatch}
                    />
                )}
                <Input
                    label="Password"
                    onUpdateValue={updateInputValueHandler.bind(this, 'password')}
                    secure
                    value={enteredPassword}
                    isInvalid={passwordIsInvalid}
                />
                {!isLogin && (
                    <Input
                        label="Confirm Password"
                        onUpdateValue={updateInputValueHandler.bind(
                            this,
                            'confirmPassword'
                        )}
                        secure
                        value={enteredConfirmPassword}
                        isInvalid={passwordsDontMatch}
                    />
                )}
                <View style={styles.buttons}>
                    <Button onPress={submitHandler}>
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {},
    buttons: {
        marginTop: 12,
    }
});

export default AuthForm;
