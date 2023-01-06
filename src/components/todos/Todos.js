import React from 'react'
import Tasks from '../tasks/Tasks'
import './todo.css'

export default function Todos(props) {
  return (
    <div className='todos'>
      {props.tasks.length===0 ? " Add your new task":
       props.tasks.map((task) =>{
          return <Tasks tasks = {task} key={task.sno} onDelete={props.onDelete}/>
      })}
      
    </div>
  )
}
