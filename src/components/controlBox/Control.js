import React, { useState } from 'react'
import './control.css'
import {VscTasklist} from 'react-icons/vsc'
import {BsFillFlagFill} from 'react-icons/bs'

export default function Control(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if(!title){
      alert("Title can't be empty")
    }
    props.addTask(title, desc);
  }
  return (
    <>
    <div className="control_container">
        <h1> <VscTasklist className='todo_icon'/> TO-DO LIST</h1>
        <div className="controls">
          <form onSubmit={submit}>
            <input className='title' type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder='Title...'/>
            <textarea className='desc' name="desc" id="desc" value={desc} onChange={(e) => {setDesc(e.target.value)}} cols="30" rows="20" placeholder='Description...'></textarea>
            <div className='priority'>
              <button id='high'><BsFillFlagFill/></button>
              <button id='medium'><BsFillFlagFill/></button>
              <button id='low'><BsFillFlagFill/></button>
            </div>
            <div className="btn">
            <button type='submit'>Add</button>
            </div>
            </form>
        </div>
    </div>
    </>
  )
}
