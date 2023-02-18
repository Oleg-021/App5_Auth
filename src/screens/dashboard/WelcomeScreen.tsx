import React, {useContext, useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";

import {AuthContext} from "../../store/auth-context";
import {Colors} from "../../util/constants/Colors";
import {getUserData} from "../../util/axios/auth/auth";

interface IWelcomeScreen {
}

const WelcomeScreen: React.FC<IWelcomeScreen> = () => {
    const [userEmail, setUserEmail] = useState("");

    const authContext = useContext(AuthContext);
    const token = authContext.token;

    useEffect(() => {
        getUserData(token).then(response => setUserEmail(response.data.users[0].email))
                          .catch(error => console.log(error));
    }, [token]);

    return <>
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.emailText}>{userEmail}</Text>
        </View>
    </>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.yellow500,
        padding: 32,
    },
    title: {
        color: Colors.gray500,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    emailText: {
        color: Colors.gray500,
        fontSize: 16
    }
});

export default WelcomeScreen;
