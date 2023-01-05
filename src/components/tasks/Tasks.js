import React from 'react'

export default function Tasks(props) {

  return (
    <div className="tasks">
        {props.tasks.title}
        {props.tasks.desc}
    </div>
  )
}
