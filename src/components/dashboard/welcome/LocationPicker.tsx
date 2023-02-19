import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Geolocation from "@react-native-community/geolocation";

import Location from "../../../models/Location";
import {OutlinedButton} from "../../ui";
import {Colors} from "../../../util/constants/Colors";
import {YaMap} from "react-native-yamap";

interface ILocationPicker {
    onPickLocation: (location: Location) => void
}

const LocationPicker: React.FC<ILocationPicker> = ({onPickLocation}) => {
    // State
    const [pickedLocation, setPickedLocation] = useState<Location>();

    // Functions
    const getLocationHandler = async () => {
        try {
            await Geolocation.getCurrentPosition(info => setPickedLocation({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude
            }));
        } catch (error) {
            console.log("Geolocation Error: ", error);
        }
    }

    // Effects
    useEffect(() => {
        if (pickedLocation)
            onPickLocation(pickedLocation);
    }, [pickedLocation, onPickLocation]);

    // Render
    let mapContent = <Text>Set your location.</Text>;

    if (pickedLocation)
        mapContent = <YaMap style={styles.map} initialRegion={{lat: pickedLocation.latitude, lon: pickedLocation.longitude}}/>

    return (
        <View>
            <View style={styles.mapPreview}>
                {mapContent}
            </View>

            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>Get Location</OutlinedButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.yellow200,
        borderRadius: 5,
        width: 350,
        height: 300,
        marginVertical: 8,
        overflow: "hidden"
    },
    map: {
        width: "100%",
        height: "100%"
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    }
});

export default LocationPicker;
