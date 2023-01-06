import React, { useState, useEffect} from 'react';
import './App.css';
import Control from './components/controlBox/Control';
import Todos from './components/todos/Todos';

function App() {
  let initTasks;
  if(localStorage.getItem("tasks") === null){
    initTasks = [];
  }
  else{
    initTasks = JSON.parse( localStorage.getItem("tasks"));
  }

  const onDelete = (task) => {
    console.log("deleted", task);

    setTasks(tasks.filter((e) => {
      return e!==task;
    }))
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  const AddTask = (title, desc) => {
  console.log("new todo", title, " " , desc);
  let sno;
    if(tasks.length==0){
      sno = 0;
    }
    else {
      sno = tasks[tasks.length-1].sno + 1;
    }
    const mytask = {
      sno: sno,
      title: title,
      desc : desc,
    }
    setTasks([...tasks, mytask]);
    console.log(mytask);
  } 

  const [tasks, setTasks] = useState(initTasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  return (
    <div className="container">
      <Control addTask = {AddTask}/>
    <Todos tasks={tasks} onDelete={onDelete}/>
    </div>
  );
}

export default App;
