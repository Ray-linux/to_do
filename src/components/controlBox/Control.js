import React from 'react'
import './control.css'
import {VscTasklist} from 'react-icons/vsc'

export default function Control() {
  return (
    <>
    <div className="control_container">
        <h1><VscTasklist/></h1> 
        <h1>TO-DO LIST</h1>
        <div className="controls">
            <input type="text" placeholder='Title...'/>
            <button type='submit'>Add</button>
        </div>
    </div>
    </>
  )
}
