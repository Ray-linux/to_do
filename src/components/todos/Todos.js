import React from 'react'
import Tasks from '../tasks/Tasks'

export default function Todos(props) {
  return (
    <div>
        <h1>Hello World</h1>
      <Tasks tasks = {props.tasks[1]}/>
    </div>
  )
}
