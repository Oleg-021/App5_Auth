import React, {useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {NavigationProp, RouteProp} from "@react-navigation/native";

import {TaskPriority} from "../../../models/todo/TaskPriority";
import {TodoTask} from "../../../models/todo/TodoTask";
import {TabBar, TodoTextInput} from "../../../components/dashboard/todo";
import {Colors} from "../../../util/constants/Colors";

interface ITodoInputScreen {
    navigation: NavigationProp<any>,
    route: RouteProp<any>
}

const TodoInputScreen: React.FC<ITodoInputScreen> = ({navigation, route}) => {
    /* State */
    const [id, setId] = useState(0);
    const [text, setText] = useState("");
    const [priority, setPriority] = useState(TaskPriority.None);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (route.params && route.params.task) {
            const task = route.params.task as TodoTask;
            setId(task.id);
            setText(task.text);
            setPriority(task.priority);
            setDone(task.done);
        }
    }, [route])

    /* Functions */
    const onNextPriority = () => {
        switch (priority) {
            case TaskPriority.High:
                setPriority(TaskPriority.None);
                break;
            case TaskPriority.Medium:
                setPriority(TaskPriority.High);
                break;
            case TaskPriority.Low:
                setPriority(TaskPriority.Medium);
                break;
            case TaskPriority.None:
                setPriority(TaskPriority.Low)
        }
    };

    const onAddItem = (id: number) => {
        const newTask: TodoTask = {id, text, priority, done};

        navigation.navigate("Todo", {newTask: newTask});
    };

    const onReject = () => {
        navigation.navigate("Todo", {});
    };

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.app}>
                <TodoTextInput text={text}
                               priority={priority}
                               onChangeText={setText}
                               onNextPriority={onNextPriority}/>
            </View>

            <TabBar onConfirm={() => onAddItem(id)} onReject={onReject}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.yellow200,
        flex: 1,
    },
    app: {
        width: "94%",
        height: "100%",
        alignItems: "center",
    }
});

export default TodoInputScreen;
