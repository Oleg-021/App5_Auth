import React, {useContext, useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import axios from "axios";

import {AuthContext} from "../../store/auth-context";

interface IWelcomeScreen {
}

const WelcomeScreen: React.FC<IWelcomeScreen> = () => {
    const [message, setMessage] = useState("");

    const authContext = useContext(AuthContext);
    const token = authContext.token;

    useEffect(() => {
        axios.get(`https://expensestracker-5f649-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${token}`)
            .then(response => setMessage(response.data));
    }, [token]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>You authenticated successfully!</Text>
            <Text>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    }
});

export default WelcomeScreen;
