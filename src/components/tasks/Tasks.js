import React from 'react'

export default function Tasks(tasks) {

  return (
    <div className="tasks">
       <h2>
        {tasks.title}
        {tasks.desc}
       </h2>
    </div>
  )
}
