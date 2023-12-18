import axiosApi from '../../axiosApi';
import {ApiTask} from '../../types';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import TaskForm from '../../components/TaskForm/TaskForm';

const NewMeal = () => {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);

  const createMeal = async (task: ApiTask) => {
    try {
      setCreating(true);
      await axiosApi.post('tasks.json', task);
      navigate('/');
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <TaskForm onSubmit={createMeal} isLoading={creating}/>
      </div>
    </div>
  );
};

export default NewMeal;