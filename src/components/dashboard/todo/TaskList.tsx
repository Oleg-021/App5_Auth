import React, {useEffect, useState} from "react";
import {Dimensions, FlatList, StyleSheet, View} from "react-native";

import TaskItem from "./TaskItem";
import {TodoTask} from "../../../models/todo/TodoTask";

interface ITaskList {
    taskList: TodoTask[],
    onNextPriority: (id: number) => void,
    onDone: (id: number) => void,
    onDelete: (id: number) => void
}

const styles = StyleSheet.create({
    containerPortrait: {
        width: "100%",
        maxHeight: "75%"
    },
    containerLandscape: {
        width: "100%",
        maxHeight: "50%"
    }
});

const TaskList: React.FC<ITaskList> = ({taskList, onNextPriority, onDone, onDelete}) => {
    const [containerStyle, setStyle] = useState(styles.containerPortrait);

    useEffect(() => {
        Dimensions.addEventListener("change", ({window: {width, height}}) => {
            if (width < height) {
                setStyle(styles.containerPortrait);
                console.log("portrait")
            } else {
                setStyle(styles.containerLandscape);
                console.log("landscape")
            }
        })
    }, [])

    const renderItem = ({item}: { item: TodoTask }) => {
        return <TaskItem key={item.id}
                         item={item}
                         onNextPriority={() => onNextPriority(item.id)}
                         onDone={() => onDone(item.id)}
                         onDelete={() => onDelete(item.id)}
        />
    }

    return (
        <View style={containerStyle}>
            <FlatList data={taskList} renderItem={renderItem}/>
        </View>
    )
}

export default TaskList;
