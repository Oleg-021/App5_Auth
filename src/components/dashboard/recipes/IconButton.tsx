import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

import {Colors} from "../../../constants/Colors";

interface IIconButton {
    icon: string,
    onPress: () => void
}

const IconButton: React.FC<IIconButton> = ({icon, onPress}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}
                       style={({pressed}) => pressed ? styles.pressed : null}
            >
                <Text style={[styles.iconText]}>{icon}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden"
    },
    iconText: {
        color: Colors.yellow500,
        fontSize: 30,
    },
    pressed: {
        opacity: 0.5
    }
});

export default IconButton;
