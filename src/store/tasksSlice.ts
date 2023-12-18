import {Task} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {deleteTask, fetchTasks} from "./tasksThanks";


interface DishesState {
  items: Task[];
  fetchLoading: boolean;
  deleteLoading: false | string;
}

const initialState: DishesState = {
  items: [],
  fetchLoading: false,
  deleteLoading: false,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
    reducers: {
        toggleTask: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.items = state.items.map(task =>
                task.id === id ? { ...task, isDoing: !task.isDoing } : task
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchTasks.fulfilled, (state, {payload: items}) => {
            state.fetchLoading = false;
            state.items = items;
        });
        builder.addCase(fetchTasks.rejected, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(deleteTask.pending, (state, {meta}) => {
            state.deleteLoading = meta.arg;
        });
        builder.addCase(deleteTask.fulfilled, (state) => {
            state.deleteLoading = false;
        });
        builder.addCase(deleteTask.rejected, (state) => {
            state.deleteLoading = false;
        });
    }
});

export const { toggleTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;


