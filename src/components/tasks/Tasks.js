import React, { useState } from 'react'
import './tasks.css'
import {FcCheckmark} from 'react-icons/fc'
import {HiXMark} from 'react-icons/hi2'
import Gpopup from '../popups/Gpopup'

export default function Tasks({tasks, onDelete}) {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
    <div className="tasks">
      <div className="task_title">
        <h3>{tasks.title}</h3>
        </div>
      <div className="task_desc">{tasks.desc}</div>
      <div className="task_footer">
        <h4>{tasks.day} {tasks.time} {tasks.date}-{tasks.month}-{tasks.year}</h4>
        <div className="task_btns">
        <button className='task_btn' onClick={() => setButtonPopup(true)}><FcCheckmark/></button>
        <button className='task_btn' onClick={() => {onDelete(tasks);}}><HiXMark/></button>
        <Gpopup trigger={buttonPopup} setTrigger = {setButtonPopup} task = {tasks} onDelete = {onDelete}/>
        </div>
      </div>
    </div>
    </>
  )
}
