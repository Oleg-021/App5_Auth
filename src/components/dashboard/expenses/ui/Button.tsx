import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

import {Colors} from "../../../../constants/Colors";

interface IButton {
    children: string,
    onPress: () => void,
    mode?: "flat" | "button",
    style?: object
}

const Button: React.FC<IButton> = ({children, onPress, mode = "button", style}) => {
    return (
        <View style={style}>
            <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
                <View style={[styles.container, mode === "flat" && styles.flat]}>
                    <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.yellow500,
        borderRadius: 4,
        padding: 8
    },
    flat: {
        backgroundColor: "transparent"
    },
    buttonText: {
        textAlign: "center",
        color: Colors.gray500,
        fontWeight: "bold"
    },
    flatText: {
        color: Colors.yellow200,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Colors.yellow200,
        borderRadius: 4
    }
});

export default Button;
