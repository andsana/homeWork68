import {Task} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, {payload: task}: PayloadAction<Task>) => {
            state.tasks.push(task);
        },
        clearTask: (state, {payload: id}: PayloadAction<string>) => {
            state.tasks.filter((task) => task.id !== id)
        }
    },
});

export const taskReducer = taskSlice.reducer;
export const {addTask, clearTask} = taskSlice.actions;





