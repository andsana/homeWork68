import {Task} from '../types';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
  deleteTask: (id: string) => void;
  onToggle: (id: string) => void;
}

const TaskList: React.FC<Props> = ({tasks, deleteTask, onToggle}) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => deleteTask(task.id)}
          onToggle={() => onToggle(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
