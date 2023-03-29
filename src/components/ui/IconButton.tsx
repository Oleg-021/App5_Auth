import React, {memo} from "react";
import {Pressable, StyleSheet} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IIconButton {
    icon: string,
    color: string,
    size: number,
    onPress: () => void
}

const IconButton: React.FC<IIconButton> = ({icon, color, size, onPress}) => {
    return (
        <Pressable style={({pressed}) => [styles.container, pressed && styles.pressed]} onPress={onPress}>
            <Ionicons name={icon} color={color} size={size}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        borderRadius: 20,
    },
    pressed: {
        opacity: 0.7,
    }
});

export default memo(IconButton);
