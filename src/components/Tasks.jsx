import React from 'react'
import Button from './Button'
import Task from './Task'

const Tasks = ({tasks, deleteTask, deleteAllTasks, toggleDone}) => {
  return (
    <div className='container__tasklist'>
        {tasks.map((task, index) => (
            <Task task={task} key={task.id} deleteTask={deleteTask} toggleDone={toggleDone} index={index}/>
        ))}
        <Button onClick={deleteAllTasks} text='Delete All Tasks'/>
    </div>
  )
}

export default Tasks