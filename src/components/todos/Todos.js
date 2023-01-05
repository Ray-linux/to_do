import React from 'react'
import Tasks from '../tasks/Tasks'
import './todo.css'

export default function Todos(props) {
  return (
    <div className='todos'>
      <Tasks tasks = {props.tasks[1]}/>
    </div>
  )
}
