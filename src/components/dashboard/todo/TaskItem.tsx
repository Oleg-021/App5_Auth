import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";

import {TodoTask} from "../../../models/todo/TodoTask";
import {TaskPriority} from "../../../models/todo/TaskPriority";
import {Colors} from "../../../util/constants/Colors";

interface ITaskItem {
    item: TodoTask,

    onNextPriority(): void,

    onDone(): void,

    onDelete(): void
}

const TaskItem: React.FC<ITaskItem> = ({item, onNextPriority, onDone, onDelete}) => {
    const navigation = useNavigation<NavigationProp<any>>();
    const textDoneStyle = item.done ? styles.textDone : styles.emptyStyle;
    const btnDoneStyle = item.done ? styles.btnDone : styles.btnNotDone;
    const priorityStyle = item.priority === TaskPriority.High ? styles.highPriority :
        item.priority === TaskPriority.Medium ? styles.mediumPriority :
            item.priority === TaskPriority.Low ? styles.lowPriority : styles.emptyStyle;

    const navigateToTextInput = () => {
        navigation.navigate("TodoInput", {task: item})
    }

    return (
        <View style={styles.container}>
            <Pressable style={({pressed}) => [pressed && styles.pressed]} onPress={navigateToTextInput}>
                <Text style={[styles.text, textDoneStyle]}>{`${item.text}`}</Text>
            </Pressable>

            <View style={styles.activities}>
                <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed]} onPress={onNextPriority}>
                    <Text style={[styles.btnText, priorityStyle]}>★</Text>
                </Pressable>

                <Pressable style={({pressed}) => [styles.btn, btnDoneStyle, pressed && styles.pressed]}
                           onPress={onDone}>
                    <Text style={styles.btnText}>✓</Text>
                </Pressable>

                <Pressable style={({pressed}) => [styles.btn, styles.btnDelete, pressed && styles.pressed]}
                           onPress={onDelete}>
                    <Text style={styles.btnText}>X</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: "100%",
        padding: 3
    },
    text: {
        color: "black",
        fontSize: 19
    },
    textDone: {
        textDecorationLine: "line-through"
    },
    activities: {
        flexDirection: "row",
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        width: 30,
        height: 30,
        borderRadius: 5
    },
    btnDelete: {
        backgroundColor: Colors.error500
    },
    btnDone: {
        backgroundColor: Colors.success,
    },
    btnNotDone: {
        backgroundColor: Colors.notSuccess,
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 20
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

export default TaskItem;
