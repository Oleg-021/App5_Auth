import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Colors} from "../../../util/constants/Colors";

interface IAddTaskButton {
}

const AddTaskButton: React.FC<IAddTaskButton> = () => {
    const navigation = useNavigation<NavigationProp<any>>();

    const goToTodoInput = () => {
        navigation.navigate("TodoInput")
    }

    return (
        <Pressable style={({pressed}) => [styles.addTaskBtn, pressed && styles.pressed]} onPress={goToTodoInput}>
            <Text style={styles.addTaskBtnText}>Add new task</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    addTaskBtn: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: Colors.gray500,
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    addTaskBtnText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
    },
    pressed: {
        opacity: 0.7
    }
});

export default AddTaskButton;
