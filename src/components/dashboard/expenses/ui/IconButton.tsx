import React from "react";
import {Pressable, StyleSheet, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IIconButton {
    icon: string,
    size: number,
    color: string | undefined,
    onPress: () => void
}

const IconButton: React.FC<IIconButton> = ({icon, size, color, onPress}) => {
    return (
        <Pressable style={({pressed}) => pressed ? styles.pressed : null}
                   onPress={onPress}>
            <View style={styles.container}>
                <Ionicons name={icon} size={size} color={color}/>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
});

export default IconButton;
