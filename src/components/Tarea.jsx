import React from 'react';
import '../stylesheets/tarea.css';
import { AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai';

const Tarea = ({
  id,
  text,
  completeTask,
  editTask,
  markCompleteTask,
  deleteTask,
}) => {
  return (
    <div className={`${completeTask ? 'task--complete' : 'task'}`}>
      <p
        className={
          completeTask ? 'task__text task__text--complete' : 'task__text'
        }
        onClick={() => markCompleteTask(id)}
        data-id={id}
      >
        {text}
      </p>
      <div className='task__icons'>
        <AiOutlineEdit
          className='task__icons--icon'
          onClick={() => editTask(id)}
        />
        <AiOutlineCloseCircle
          className='task__icons--icon'
          onClick={() => deleteTask(id)}
        />
      </div>
    </div>
  );
};

export default Tarea;
