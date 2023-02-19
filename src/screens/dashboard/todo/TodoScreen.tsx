import React, {useContext, useEffect, useState} from "react";
import {Pressable, SafeAreaView, StyleSheet, View} from "react-native";
import {RouteProp, useRoute} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";

import {TodoTask} from "../../../models/todo/TodoTask";
import {TaskPriority} from "../../../models/todo/TaskPriority";
import {AddTaskButton, TaskList} from "../../../components/dashboard/todo";
import {Colors} from "../../../util/constants/Colors";
import {AuthContext} from "../../../store/auth-context";

type PropsType = {};

const TodoScreen: React.FC<PropsType> = () => {
    /* State */
    const [taskList, setTaskList] = useState([] as TodoTask[]);
    const [lastId, setLastId] = useState(1);

    /* Params */
    const route = useRoute<RouteProp<any>>();
    const authContext = useContext(AuthContext);

    /* Functions */
    const addItem = (task: TodoTask) => {
        if (task.text !== "")
            if (task.id === 0) {
                task.id = lastId;
                setLastId(prevLastId => prevLastId + 1);
                setTaskList(prevTaskList => [...prevTaskList, task])
            } else {
                setTaskList(prevTaskList => {
                    const index = prevTaskList.findIndex(item => item.id === task.id);
                    return [
                        ...prevTaskList.slice(0, index),
                        task,
                        ...prevTaskList.slice(index + 1)
                    ];
                });
            }
    }

    const onDone = (id: number) => {
        setTaskList(prevTaskList => {
            const index = prevTaskList.findIndex(item => item.id === id);
            const updatedTodoTask = {...prevTaskList[index]};
            updatedTodoTask.done = !updatedTodoTask.done;

            return [
                ...prevTaskList.slice(0, index),
                updatedTodoTask,
                ...prevTaskList.slice(index + 1)
            ];
        });
    }

    const onDelete = (id: number) => {
        setTaskList(prevTaskList => {
            const index = prevTaskList.findIndex(item => item.id === id);

            return [
                ...prevTaskList.slice(0, index),
                ...prevTaskList.slice(index + 1)
            ];
        });
    }

    const onNextPriority = (id: number) => {
        setTaskList(prevTaskList => {
            const index = prevTaskList.findIndex(item => item.id === id);
            const updatedTodoTask = {...prevTaskList[index]};

            switch (updatedTodoTask.priority) {
                case TaskPriority.High:
                    updatedTodoTask.priority = TaskPriority.None;
                    break;
                case TaskPriority.Medium:
                    updatedTodoTask.priority = TaskPriority.High;
                    break;
                case TaskPriority.Low:
                    updatedTodoTask.priority = TaskPriority.Medium;
                    break;
                case TaskPriority.None:
                    updatedTodoTask.priority = TaskPriority.Low
            }

            return [
                ...prevTaskList.slice(0, index),
                updatedTodoTask,
                ...prevTaskList.slice(index + 1)
            ];
        });
    }

    const scheduleNotificationHandler = () => {
        // TODO notification
    }

    /* Effects */
    useEffect(() => {
        AsyncStorage.getItem(`todoList-${authContext.email}`).then((todoList) => {
            if (todoList) {
                setTaskList(JSON.parse(todoList));
            }
        });
    }, []);

    useEffect(() => {
        if (taskList.length > 0)
            setLastId(taskList[taskList.length - 1].id + 1);
        else
            setLastId(1);

        AsyncStorage.setItem(`todoList-${authContext}`, JSON.stringify(taskList));
    }, [taskList])

    useEffect(() => {
        if (route.params && route.params.newTask)
            addItem(route.params.newTask)
    }, [route]);

    const outputTaskList = [...taskList];
    outputTaskList.sort((current, next) => current.done > next.done ? 1 : current.done === next.done ? 0 : -1);

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.app}>
                <Pressable style={({pressed}) => pressed && styles.pressed} onPress={scheduleNotificationHandler}>
                    <Ionicons name="list" size={50} color={Colors.gray500}/>
                </Pressable>

                <TaskList taskList={outputTaskList}
                          onNextPriority={onNextPriority}
                          onDone={onDone}
                          onDelete={onDelete}/>

                <AddTaskButton/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.yellow500,
        flex: 1,
    },
    app: {
        width: "94%",
        height: "100%",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.7
    }
});

export default TodoScreen;
