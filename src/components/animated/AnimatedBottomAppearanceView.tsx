import React, {useEffect} from "react";
import {Dimensions} from "react-native";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

interface IAnimatedBottomAppearanceView {
    children: React.ReactNode,
    animationDuration: number
}

const AnimatedBottomAppearanceView: React.FC<IAnimatedBottomAppearanceView> = ({children, animationDuration}) => {
    const {height} = Dimensions.get("window");

    const appearanceProgressValue = useSharedValue(0);

    const reanimatedStyle = useAnimatedStyle(() => {
        const interpolationY = interpolate(appearanceProgressValue.value, [0, 1], [height, 0]);

        return {
            opacity: appearanceProgressValue.value,
            transform: [{translateY: withTiming(interpolationY, {duration: 0})}]
        };
    });

    useEffect(() => {
        appearanceProgressValue.value = withTiming(1, {duration: animationDuration});
    }, []);

    return <Animated.View style={reanimatedStyle}>{children}</Animated.View>
}

export default AnimatedBottomAppearanceView;
