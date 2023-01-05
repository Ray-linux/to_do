import React from 'react'
import './control.css'
import {VscTasklist} from 'react-icons/vsc'
import {BsFillFlagFill} from 'react-icons/bs'

export default function Control() {
  return (
    <>
    <div className="control_container">
        <h1> <VscTasklist className='todo_icon'/> TO-DO LIST</h1>
        <div className="controls">
            <input className='title' type="text" placeholder='Title...'/>
            <textarea className='desc' name="desc" id="desc" cols="30" rows="20" placeholder='Description...'></textarea>
            <div className='priority'>
              <button id='high'><BsFillFlagFill/></button>
              <button id='medium'><BsFillFlagFill/></button>
              <button id='low'><BsFillFlagFill/></button>
            </div>
            <div className="btn">
            <button type='submit'>Add</button>
            </div>
        </div>
    </div>
    </>
  )
}
