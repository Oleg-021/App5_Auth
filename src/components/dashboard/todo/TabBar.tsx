import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../../constants/Colors";

interface ITabBar {
    onConfirm: () => void
    onReject: () => void
}

const TabBar: React.FC<ITabBar> = ({onReject, onConfirm}) => {
    return (
        <View style={styles.tabBar}>
            <Pressable style={({pressed}) => [styles.tabBarBtn, styles.tabBarConfirmBtn, pressed && styles.pressed]}
                       onPress={onConfirm}>
                <Text style={styles.confirmText}>Confirm</Text>
            </Pressable>
            <Pressable style={({pressed}) => [styles.tabBarBtn, styles.tabBarCancelBtn, pressed && styles.pressed]}
                       onPress={onReject}>
                <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: Colors.black
    },
    tabBarBtn: {
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        padding: 10
    },
    tabBarConfirmBtn: {
        backgroundColor: Colors.yellow700
    },
    tabBarCancelBtn: {
        backgroundColor: Colors.gray500
    },
    confirmText: {
        color: Colors.gray500,
        fontSize: 18,
        fontWeight: "bold"
    },
    cancelText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: "bold"
    },
    pressed: {
        opacity: 0.7
    }
});

export default TabBar;
