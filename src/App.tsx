import {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useAppDispatch} from './app/hooks';
import Appbar from './components/Appbar/Appbar';
import NewTask from './containers/NewTask/NewTask';
import {fetchTasks} from './store/tasksThanks';
import TaskList from './containers/Task/TaskList';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<TaskList/>}
          />
          <Route path="/new-task" element={<NewTask/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
