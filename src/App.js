import { useState } from "react";
import Header from './components/Header';
import AddTask from "./components/AddTask";
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter( (task) => task.id !== deletedTaskId));
  }

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 100 + 1);
    const addNewTask = {id, ...newTask};
    setTasks([addNewTask, ...tasks]);
  }

  const toggleDone = (toggleDoneId) => {
    setTasks(tasks.map((task) => task.id === toggleDoneId ? {...task, isDone: !task.isDone} : task));
  }

  const toggleShow = () => {
    setShowAddTask(!showAddTask)
  }

  const deleteAllTasks = () => {
    setTasks([]);
  }

  return (
    <div className="container">
      <Header title='TASK TRACKER' showAddTask={showAddTask} onClick={toggleShow}/>
      {showAddTask && <AddTask addTask={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} deleteAllTasks={deleteAllTasks} toggleDone={toggleDone}/> : <h2 style={{textAlign: 'center'}}>No Task to Show !</h2> }
      
    </div>
  );
}

export default App;
