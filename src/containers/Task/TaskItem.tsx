import {Task} from '../../types';
import React from 'react';
import ButtonSpinner from '../../components/Spinner/ButtonSpinner';

interface Props {
  task: Task;
  onToggle: React.ChangeEventHandler<HTMLInputElement>;
  onDelete: React.MouseEventHandler;
  deleteLoading: boolean | string;
}

const TaskItem: React.FC<Props> = ({
  task,
  onToggle,
  onDelete,
  deleteLoading
}) => {

  return (
    <div className="card m-2" style={{maxWidth: '500px'}}>
      <div className="card-body row">
        <div className="col">
          <h5 className="card-title">{task.title}</h5>
        </div>
        <div className="col">
          <span className="me-2">Done</span>
          <input
            type="checkbox"
            checked={task.isDoing}
            onChange={onToggle}
          />
        </div>
        <div className="col">
          <button
            className="btn btn-danger"
            onClick={onDelete}
            disabled={deleteLoading ? deleteLoading === task.id : false}
          >
            {deleteLoading && deleteLoading === task.id && (<ButtonSpinner/>)}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

