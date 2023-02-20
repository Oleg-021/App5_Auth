import React from "react";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";

import {TaskPriority} from "../../../models/todo/TaskPriority";
import {Colors} from "../../../constants/Colors";

interface ITodoTextInput {
    text: string,
    priority: TaskPriority,
    onChangeText: (inputText: string) => void,
    onNextPriority: () => void
}

const TodoTextInput: React.FC<ITodoTextInput> = ({text, priority, onChangeText, onNextPriority}) => {
    const priorityStyle = priority === TaskPriority.High ? styles.highPriority :
        priority === TaskPriority.Medium ? styles.mediumPriority :
            priority === TaskPriority.Low ? styles.lowPriority : styles.emptyStyle;

    return (
        <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput}
                       value={text}
                       onChangeText={onChangeText}
                       placeholder="Type task"
                       multiline={true}/>
            <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed]} onPress={onNextPriority}>
                <Text style={[styles.btnText, priorityStyle]}>★</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderBottomWidth: 1,
        borderColor: Colors.gray500
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        borderRadius: 5
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 20
    },
    textInput: {
        width: "90%",
        fontSize: 18
    },
    highPriority: {
        color: "#ff4d4d"
    },
    mediumPriority: {
        color: "#ff8126"
    },
    lowPriority: {
        color: "#0294ff"
    },
    emptyStyle: {},
    pressed: {
        opacity: 0.7
    }
});

export default TodoTextInput;
