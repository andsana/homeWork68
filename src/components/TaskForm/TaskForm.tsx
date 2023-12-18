import {ApiTask, TaskMutation} from '../../types';
import React, {useState} from 'react';
import ButtonSpinner from '../Spinner/ButtonSpinner';

const initialState: TaskMutation = {
  title: '',
  isDoing: false,
};

interface Props {
  onSubmit: (task: ApiTask) => void;
  isLoading?: boolean;
}

const TaskForm: React.FC<Props> = ({onSubmit, isLoading = false}) => {
  const [task, setTask] = useState<TaskMutation>(initialState);

  const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    onSubmit(task);
  };


  return (
    <form className="m-3" onSubmit={onFormSubmit} style={{maxWidth: '300px'}}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          value={task.title}
          onChange={changeTask}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          name="isDoing"
          id="isDoing"
          className="form-check-input"
          checked={task.isDoing}
          onChange={changeTask}
        />
        <label htmlFor="isDoing" className="form-check-label mt-2">Done</label>
      </div>
      <button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>
        {isLoading && <ButtonSpinner/>}
        Create
      </button>
    </form>
  );
};

export default TaskForm;



