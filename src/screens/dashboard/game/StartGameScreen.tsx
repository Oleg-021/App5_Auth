import React, {useState} from "react";
import {Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View} from "react-native";
import {Card, InstructionText, PrimaryButton, Title} from "../../../components/dashboard/game/ui";
import {Colors} from "../../../util/constants/Colors";

interface IStartGameScreen {
    onPickNumber: (pickedNumber: number) => void
}

const StartGameScreen: React.FC<IStartGameScreen> = ({onPickNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState("");

    const {width, height} = useWindowDimensions();

    function numberInputHandler(enteredText: string) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber("");
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert
            Alert.alert("Invalid number",
                "Number has to be a number between 1 and 99.",
                [{text: "Okay", style: "destructive", onPress: resetInputHandler}]);
            return;
        }

        onPickNumber(chosenNumber);
    }

    const marginTopDistance = width > height ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen}>
                <View style={[styles.screenContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput style={styles.numberInput}
                                   maxLength={2}
                                   keyboardType="number-pad"
                                   autoCapitalize="none"
                                   autoCorrect={false}
                                   onChangeText={numberInputHandler}
                                   value={enteredNumber}
                        />

                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    screenContainer: {
        flex: 1,
        alignItems: "center",
    },
    instructionText: {
        color: Colors.game.yellow,
        fontSize: 24
    },
    numberInput: {
        height: 50,
        width: 50,
        color: Colors.game.yellow,
        fontSize: 32,
        fontWeight: "bold",
        borderBottomColor: Colors.game.yellow,
        borderBottomWidth: 2,
        marginVertical: 8,
        marginRight: 16,
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
});

export default StartGameScreen;
