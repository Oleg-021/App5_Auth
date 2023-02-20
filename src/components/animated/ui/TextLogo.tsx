import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

import {Colors} from "../../../constants/Colors";

interface ITextLogo {
    text: string,
    size?: number,
    color?: string,
    animationDuration: number
}

const TextLogo: React.FC<ITextLogo> = ({text, size, color, animationDuration}) => {
    const style = {color: color, fontSize: size};

    // Reanimated
    const opacityProgressValue = useSharedValue(0);
    const reanimatedStyle = useAnimatedStyle(() => {
        return {opacity: opacityProgressValue.value};
    });

    // Effects
    useEffect(() => {
        opacityProgressValue.value = withTiming(1, {duration: animationDuration});
    }, []);

    // Render
    return <Animated.Text style={[styles.text, style, reanimatedStyle]}>{text}</Animated.Text>;
}

const styles = StyleSheet.create({
    white: {
        color: Colors.gray700,
        fontSize: 30,
        fontWeight: "bold",
    }
});

export default TextLogo;
