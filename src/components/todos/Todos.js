import React from 'react'
import Tasks from '../tasks/Tasks'
import './todo.css'

export default function Todos(props) {
  return (
    <div className='todos'>
      {props.tasks.map((task) =>{
          return <Tasks tasks = {task}/>
      })}
      
    </div>
  )
}
