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
    //adding time to the task in apm and pm formate
    let now = new Date();
    let hour;
    let apm;
    let arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let h = now.getHours()
    if(h<=23 && h>12){
        hour = (h-12).toString()
        apm = "pm"
    }
    else if(h>0 && h<12){
        hour = h.toString();
        apm = "am"
    }
    else if(h === 0){
        hour = (h + 12).toString();
        apm = "am"
    }
    else if(h===12){
        hour = h.toString();
        apm = "noon"
    }
    let m = now.getMinutes();
    
    let hour_minute = hour.concat(":", m);
    let full_time = hour_minute.concat(" ", apm);
    let day = dayNames[now.getDay()]
    let date = now.getDate()
    let month =arrMonth[now.getMonth()]
    let year = now.getFullYear()



  let sno;
    if(tasks.length===0){
      sno = 0;
    }
    else {
      sno = tasks[tasks.length-1].sno + 1;
    }
    const mytask = {
      sno: sno,
      title: title,
      desc : desc,
      time : full_time,
      date: date,
      month: month,
      year: year,
      day: day
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
