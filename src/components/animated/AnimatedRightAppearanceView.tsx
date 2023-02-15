import React, {useEffect} from "react";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {Dimensions} from "react-native";

interface IAnimatedRightAppearanceView {
    children: React.ReactNode,
    animationDuration: number
}

const AnimatedRightAppearanceView: React.FC<IAnimatedRightAppearanceView> = ({children, animationDuration}) => {
    const {width} = Dimensions.get("window");
    const appearanceProgressValue = useSharedValue(0);

    const reanimatedStyle = useAnimatedStyle(() => {
        const interpolationX = interpolate(appearanceProgressValue.value, [0, 1], [width, 0]);

        return {
            opacity: appearanceProgressValue.value,
            transform: [{translateX: withTiming(interpolationX, {duration: 0})}]
        };
    });

    useEffect(() => {
        appearanceProgressValue.value = withTiming(1, {duration: animationDuration});
    }, []);

    return <Animated.View style={reanimatedStyle}>{children}</Animated.View>
}

export default AnimatedRightAppearanceView;
