import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

import {Colors} from "../../../../util/constants/Colors";

interface ILoadingOverlay {
}

const LoadingOverlay: React.FC<ILoadingOverlay> = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: Colors.gray500
    }
});

export default LoadingOverlay;
