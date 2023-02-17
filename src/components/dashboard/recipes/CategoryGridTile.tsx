import React from "react";
import {Platform, Pressable, StyleSheet, Text, View} from "react-native";

import {Colors} from "../../../util/constants/Colors";
import LinearGradient from "react-native-linear-gradient";

interface ICategoryGridTile {
    title: string,
    colors: string[],
    onPress: () => void
}

const CategoryGridTile: React.FC<ICategoryGridTile> = ({title, colors, onPress}) => {
    return (
        <View style={styles.gridItem}>
            <LinearGradient style={styles.container} colors={[Colors.gray500, Colors.gray500]}>
                <Pressable style={({pressed}) => [styles.container, pressed ? styles.buttonPressed : null]}
                           android_ripple={{color: Colors.white}}
                           onPress={onPress}
                >
                    <View style={styles.innerContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </Pressable>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 10,
        backgroundColor: Colors.white,
        elevation: 8,
        shadowColor: Colors.black,
        shadowOpacity: 0.55,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 8,
        overflow: Platform.select({android: "hidden", ios: "visible"})
    },
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 16
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        color: Colors.yellow200,
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default CategoryGridTile;
