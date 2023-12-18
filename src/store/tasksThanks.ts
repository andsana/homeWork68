import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {Task, TasksList} from "../types";
import {RootState} from "../app/store";

export const fetchTasks = createAsyncThunk<Task[]>(
  'tasks/fetchAll',
  async () => {
    const tasksResponse = await axiosApi.get<TasksList | null>('/tasks.json');
    const tasks = tasksResponse.data;

    if (!tasks) {
      return [];
    }

    return Object.keys(tasks).map(key => {
      const task = tasks[key];
      return {
        ...task,
        id: key,
      }
    });
  }
);

export const deleteTask = createAsyncThunk<void, string>(
  'tasks/delete',
  async (taskId) => {
    await axiosApi.delete('/tasks/' + taskId + '.json');
  }
);

export const selectTasks = (state: RootState) => state.tasks.items;
export const selectFetchTasksLoading = (state: RootState) => state.tasks.fetchLoading;
export const selectDeleteTaskLoading = (state: RootState) => state.tasks.deleteLoading;







