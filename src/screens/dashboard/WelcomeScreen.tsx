import React, {useCallback, useContext, useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";

import {AuthContext} from "../../store/auth-context";
import {Colors} from "../../constants/Colors";
import {getUserData} from "../../utils/axios/auth/auth";
import {ImagePicker, LocationPicker} from "../../components/dashboard/welcome";
import Location from "../../models/Location";

interface IWelcomeScreen {
}

const WelcomeScreen: React.FC<IWelcomeScreen> = () => {
    // State
    const [userEmail, setUserEmail] = useState("");
    const [selectedImageUri, setSelectedImageUri] = useState<string>();
    const [pickedLocation, setPickedLocation] = useState<Location>();

    // Params
    const authContext = useContext(AuthContext);
    const token = authContext.token;

    // Functions
    const imageTakenHandler = (imageUri: string) => {
        setSelectedImageUri(imageUri);
    }

    const pickLocationHandler = useCallback((location: Location) => {
        setPickedLocation(location);
    }, []);

    // Effects
    useEffect(() => {
        getUserData(token).then(response => setUserEmail(response.data.users[0].email))
            .catch(error => console.log(error));
    }, [token]);

    useEffect(() => {
        console.log("Image:", selectedImageUri);
        console.log("Location:", pickedLocation);
    }, [selectedImageUri, pickedLocation]);

    return <>
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <ImagePicker onTakeImage={imageTakenHandler}/>

                <Text style={styles.title}>Welcome!</Text>
                <Text style={styles.emailText}>{userEmail}</Text>
            </View>

            <LocationPicker onPickLocation={pickLocationHandler}/>
        </View>
    </>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: Colors.yellow500,
        padding: 32,
    },
    titleContainer: {
        alignItems: "center"
    },
    title: {
        color: Colors.gray500,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
    },
    emailText: {
        color: Colors.gray500,
        fontSize: 16
    }
});

export default WelcomeScreen;
