import React from "react";
import {Pressable, StyleSheet} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Colors, setDarkTheme, setLightTheme} from "../../util/constants/Colors";

interface IChangeThemeButton {
}

const ChangeThemeButton: React.FC<IChangeThemeButton> = () => {
    const icon = Colors.themeStyle === "light" ? "sunny-outline" : "moon-outline";

    const setThemeHandler = () => {
        if (Colors.themeStyle === "light")
            setDarkTheme();
        else
            setLightTheme();
    }

    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={setThemeHandler}>
            <Ionicons name={icon} size={30} color={Colors.primary500}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});

export default ChangeThemeButton;
