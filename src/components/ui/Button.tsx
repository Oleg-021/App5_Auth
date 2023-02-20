import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

import {Colors} from "../../constants/Colors";

interface IButton {
    children: string,
    onPress: () => void
}

const Button: React.FC<IButton> = ({children, onPress}) => {
    return (
        <Pressable style={({pressed}) => [styles.container, pressed && styles.pressed]} onPress={onPress}>
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: Colors.yellow500,
        elevation: 2,
        shadowColor: Colors.gray500,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.gray500,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Button;
