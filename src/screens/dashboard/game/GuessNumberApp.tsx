import React, {useState} from "react";
import {ImageBackground, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import StartGameScreen from "./StartGameScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import {Colors} from "../../../util/constants/Colors";

interface IGuessNumberApp {}

const GuessNumberApp: React.FC<IGuessNumberApp> = () => {
    const [userNumber, setUserNumber] = useState<number>();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds: number) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function startNewGameHandler() {
        setUserNumber(undefined);
        setGameIsOver(true);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber)
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;

    if (gameIsOver && userNumber)
        screen =
            <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>;

    return (
        <>
            <StatusBar backgroundColor={"rgb(35,35,35)"}/>
            <LinearGradient style={styles.rootScreen} colors={[Colors.game.darkCherry, Colors.game.yellow]}>
                <ImageBackground source={require("../../../assets/img/game/background.png")}
                                 resizeMode="cover"
                                 style={styles.rootScreen}
                                 imageStyle={styles.backgroundImage}
                >
                    <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    statusBar: {},
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.2
    }
});

export default GuessNumberApp;
