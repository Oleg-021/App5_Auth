import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import {Colors} from "../../constants/Colors";

interface IOutlinedButton {
    children: string,
    icon: string,
    onPress: () => void
}

const OutlinedButton: React.FC<IOutlinedButton> = ({children, icon, onPress}) => {
    return (
        <Pressable style={({pressed}) => [styles.container, pressed && styles.pressed]} onPress={onPress}>
            <Ionicons style={styles.icon} name={icon} size={18} color={Colors.gray500}/>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: Colors.gray500,
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginVertical: 8
    },
    icon: {
        marginRight: 6
    },
    text: {
        color: Colors.gray500,
        fontWeight: "bold",
    },
    pressed: {
        opacity: 0.7
    }
});

export default OutlinedButton;
