import React, {memo} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

import {AnimatedRightAppearanceView} from "../index";
import {Colors} from "../../../constants/Colors";

interface ILetsStartButton {
    animationDuration: number,
    onPress: () => void
}

const LetsStartButton: React.FC<ILetsStartButton> = ({animationDuration, onPress}) => {
    return (
        <AnimatedRightAppearanceView animationDuration={animationDuration}>
            <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
                <View style={styles.container}>
                    <Text style={styles.buttonText}>Let's begin</Text>
                    <Text style={styles.buttonText}>➤</Text>
                </View>
            </Pressable>
        </AnimatedRightAppearanceView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.gray500,
        width: 350,
        padding: 15,
        borderRadius: 10
    },
    buttonText: {
        color: Colors.white,
        fontSize: 21,
        fontWeight: "bold"
    },
    pressed: {
        opacity: 0.7
    }
});

export default memo(LetsStartButton);
