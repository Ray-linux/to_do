import React from 'react'
import './tasks.css'
import {FcCheckmark} from 'react-icons/fc'
import {HiXMark} from 'react-icons/hi2'

export default function Tasks({tasks, onDelete}) {

  return (
    <>
    <div className="tasks">
      <div className="task_title">
        <h3>{tasks.title}</h3>
        </div>
      <div className="task_desc">{tasks.desc}</div>
      <div className="task_footer">
        <h4>{tasks.time}</h4>
        <div className="task_btns">
        <button className='task_btn'><FcCheckmark/></button>
        <button className='task_btn' onClick={() => {onDelete(tasks)}}><HiXMark/></button>
        </div>
      </div>
    </div>
    </>
  )
}
