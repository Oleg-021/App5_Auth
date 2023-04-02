import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {TodoTask} from "../../../src/models/todo/TodoTask";
import {TaskPriority} from "../../../src/models/todo/TaskPriority";
import {TaskList} from "../../../src/components/dashboard/todo";

describe("TaskList correct", () => {
    const todoList: TodoTask[] = [
        {id: 1, text: "Take a shower", done: false, priority: TaskPriority.Medium},
        {id: 2, text: "Clean teeth", done: true, priority: TaskPriority.High},
        {id: 3, text: "Go to the Gym", done: false, priority: TaskPriority.High},
        {id: 4, text: "Pay for phone", done: false, priority: TaskPriority.Low},
        {id: 5, text: "Make work", done: false, priority: TaskPriority.High},
        {id: 6, text: "Make something", done: false, priority: TaskPriority.None}
    ];
    const onFunc = () => {}

    it("TaskList renders", () => {
        renderer.create(<TaskList taskList={todoList}
                                  onDelete={onFunc}
                                  onDone={onFunc}
                                  onNextPriority={onFunc} />)
    })
})