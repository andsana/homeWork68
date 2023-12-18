export interface Task {
    id: string;
    title: string;
    isDoing: boolean;
}

export interface TaskMutation {
  title: string;
  isDoing: boolean;
}

export type ApiTask = Omit<Task, 'id'>;

export interface TasksList {
    [id: string]: ApiTask;
}