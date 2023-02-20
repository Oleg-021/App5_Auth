import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {Colors} from "../../../constants/Colors";

interface IGuessLogItem {
    roundNumber: number,
    guess: number
}

const GuessLogItem: React.FC<IGuessLogItem> = ({roundNumber, guess}) => {
  return (
      <View style={styles.listItem}>
          <Text style={styles.itemText}>#{roundNumber}</Text>
          <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: Colors.gray500,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.yellow200,
        width: "100%",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        color: Colors.game.dark,
        fontWeight: "bold"
    }
});

export default GuessLogItem;
