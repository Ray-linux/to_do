import React from 'react'
import './tasks.css'
import {FcCheckmark} from 'react-icons/fc'
import {HiXMark} from 'react-icons/hi2'

export default function Tasks(props) {

  return (
    <>
    <div className="tasks">
      <div className="task_title">
        <h3>{props.tasks.title}</h3>
        </div>
      <div className="task_desc">{props.tasks.desc}</div>
      <div className="task_footer">
        <h4>tme: 2.30pm </h4>
        <div className="task_btns">
        <button className='task_btn'><FcCheckmark/></button>
        <button className='task_btn'><HiXMark/></button>
        </div>
      </div>
    </div>
    </>
  )
}
