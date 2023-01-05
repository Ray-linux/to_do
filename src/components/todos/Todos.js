import React from 'react'
import Tasks from '../tasks/Tasks'

export default function Todos(props) {
  return (
    <div>
        <h1>Hello World</h1>
      {/* {props.todos} */}
      {props.tasks[0].title}
      {props.tasks[0].desc}
      {props.tasks[1].title}
      {props.tasks[1].desc}
      {props.tasks[2].title}
      {props.tasks[2].desc}
      <Tasks tasks = {props.tasks[1]}/>
    </div>
  )
}
