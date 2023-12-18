import {Route, Routes, useLocation} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import axiosApi from './axiosApi';
import {Task, TasksList} from './types';
import TaskList from './containers/TaskList';
import Appbar from './components/Appbar/Appbar';
import Spinner from './components/Spinner/Spinner';
import NewTask from './containers/NewTask/NewTask';


function App() {
  const location = useLocation();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const tasksResponse = await axiosApi.get<TasksList | null>('/tasks.json');
      const tasks = tasksResponse.data;

      if (!tasks) {
        setTasks([]);
      } else {
        const newTasks = Object.keys(tasks).map((id) => {
          const task = tasks[id];
          return {
            ...task,
            id,
          };
        });
        setTasks(newTasks);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchTasks();
    }
  }, [location.pathname, fetchTasks]);

  const deleteTask = async (id: string) => {
    await axiosApi.delete('tasks/' + id + '.json');
    await fetchTasks();
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? {...task, isDoing: !task.isDoing} : task
      )
    );
  };


  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={loading ? <Spinner /> : <TaskList tasks={tasks} onToggle={toggleTask} deleteTask={deleteTask} />} />
          <Route path="/new-task" element={<NewTask/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;

