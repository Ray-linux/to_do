import React, { useState } from 'react';
import './App.css';
import Control from './components/controlBox/Control';
import Todos from './components/todos/Todos';

function App() {
  const onDelete = (task) => {
    console.log("deleted", task);

    setTasks(tasks.filter((e) => {
      return e!==task;
    }))
  }
  const [tasks, setTasks] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "you need to go to the mall to get this job done"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "you need to go to the ghat to get this job done"
    },
    {
      sno: 4,
      title: "Go to the home",
      desc: "you need to go to the ghat to get this job done"
    },
    {
      sno: 5,
      title: "Go to the ghar",
      desc: "you need to go to the ghat to get this job done"
    }
  ])

  return (
    <div className="container">
      <Control/>
    <Todos tasks={tasks} onDelete={onDelete}/>
    </div>
  );
}

export default App;
