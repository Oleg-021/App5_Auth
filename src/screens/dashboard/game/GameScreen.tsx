import React, {useEffect, useState} from "react";
import {Alert, FlatList, StyleSheet, Text, useWindowDimensions, View} from "react-native";

import {GuessLogItem, NumberContainer} from "../../../components/dashboard/game";
import {Card, PrimaryButton, Title} from "../../../components/dashboard/game/ui";

function generateRandomBetween(min: number, max: number, exclude: number): number {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude)
        return generateRandomBetween(min, max, exclude);
    else
        return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100

interface IGameScreen {
    userNumber: number,
    onGameOver: (numberOfRounds: number) => void
}

const GameScreen: React.FC<IGameScreen> = ({userNumber, onGameOver}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber)
            onGameOver(guessRounds.length);
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction: "lower" | "greater") {
        if ((direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)) {
            Alert.alert("Don't lie!",
                "You know, that this is wrong...",
                [{text: "Sorry!", style: "cancel"}]);
            return;
        }


        if (direction === "lower")
            maxBoundary = currentGuess;
        else
            minBoundary = currentGuess + 1;

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundListLength = guessRounds.length;

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                            <Text style={styles.buttonText}>▼</Text>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                            <Text style={styles.buttonText}>▲</Text>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );


    if (width > height)
        content = (
            <>
                <View style={styles.buttonsContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                            <Text style={styles.buttonText}>▼</Text>
                        </PrimaryButton>
                    </View>

                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                            <Text style={styles.buttonText}>▲</Text>
                        </PrimaryButton>
                    </View>
                </View>

            </>
        );

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>

            {content}

            <View style={styles.listContainer}>
                <FlatList data={guessRounds}
                          renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLength - itemData.index}
                                                                  guess={itemData.item}/>}
                          keyExtractor={(item) => item.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        padding: 20
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonsContainerWide: {
        flexDirection: "row",
        alignItems: "center"
    },
    buttonContainer: {
        flex: 1
    },
    buttonText: {
        fontSize: 25
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
});

export default GameScreen;
