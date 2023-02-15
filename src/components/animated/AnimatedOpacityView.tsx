import React, {useEffect} from "react";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

interface IAnimatedOpacityView {
    children: React.ReactNode,
    animationDuration: number
}

const AnimatedOpacityView: React.FC<IAnimatedOpacityView> = ({children, animationDuration}) => {
    const opacityProgressValue = useSharedValue(0);

    const reanimatedStyle = useAnimatedStyle(() => {
        return {opacity: opacityProgressValue.value};
    });

    useEffect(() => {
        opacityProgressValue.value = withTiming(1, {duration: animationDuration});
    }, []);

    return <Animated.View style={reanimatedStyle}>{children}</Animated.View>;
}

export default AnimatedOpacityView;
