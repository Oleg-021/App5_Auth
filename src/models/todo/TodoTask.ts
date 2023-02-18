import { TaskPriority } from "./TaskPriority";

export type TodoTask = {
    id: number,
    text: string,
    priority: TaskPriority,
    done: boolean
}
