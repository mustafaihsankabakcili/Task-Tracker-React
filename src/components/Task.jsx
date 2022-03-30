import { FaTimesCircle } from "react-icons/fa";
import React from "react";

const Task = ({ task, deleteTask, toggleDone, index }) => {

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`} onDoubleClick={() => toggleDone(task.id)}>
      <h3>{index + 1}. {task.text} <FaTimesCircle style={{color: 'red', cursor: 'pointer'}} onClick={() => deleteTask(task.id)}/>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
