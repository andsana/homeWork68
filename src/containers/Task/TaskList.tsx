import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import TaskItem from './TaskItem';
import {
  deleteTask,
  fetchTasks,
  selectDeleteTaskLoading,
  selectFetchTasksLoading,
  selectTasks,
} from '../../store/tasksThanks';
import Spinner from '../../components/Spinner/Spinner';
import {toggleTask} from '../../store/tasksSlice';

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const fetchLoading = useAppSelector(selectFetchTasksLoading);
  const deleteLoading = useAppSelector(selectDeleteTaskLoading);

  const removeTask = async (id: string) => {
    await dispatch(deleteTask(id));
    await dispatch(fetchTasks());
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleToggle = (id: string) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      {fetchLoading ? (
        <Spinner/>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => removeTask(task.id)}
            deleteLoading={deleteLoading}
            onToggle={() => handleToggle(task.id)}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
