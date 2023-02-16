import React from "react";
import {Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";

import {PrimaryButton, Title} from "../../../components/app/game/ui";
import {Colors} from "../../../util/constants/Colors";

interface IGameOverScreen {
    roundsNumber: number,
    userNumber: number,
    onStartNewGame: () => void
}

const GameOverScreen: React.FC<IGameOverScreen> = ({roundsNumber, userNumber, onStartNewGame}) => {
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if (width < 380)
        imageSize = 150;

    if (height < 400)
        imageSize = 80;

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.screenContainer}>
                <Title>GAME OVER!</Title>

                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={require("../../../assets/img/game/success.png")}/>
                </View>

                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess number <Text
                    style={styles.highlight}>{userNumber}</Text>.
                </Text>

                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    imageContainer: {
        margin: 36,
        borderWidth: 3,
        borderColor: Colors.game.darkCherry,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    summaryText: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20
    },
    highlight: {
        color: Colors.game.darkCherry,
        fontWeight: "bold",
    }
});

export default GameOverScreen;
