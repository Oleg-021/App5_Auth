import React, {memo} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../constants/Colors";

interface IFlatButton {
    children: string,
    onPress: () => void
}

const FlatButton: React.FC<IFlatButton> = ({children, onPress}) => {
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
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.white,
    }
});

export default memo(FlatButton);
