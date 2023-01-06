import React from 'react'
import './gpopup.css'
import {FaRegThumbsUp} from 'react-icons/fa'
import {HiXMark} from 'react-icons/hi2'

export default function Gpopup(props) {
  return (props.trigger) ? (
    <div className='gpopup'>
        <div className="gpopup_inner">
            <button className='close_btn' onClick={() => {props.setTrigger(false)}}><HiXMark/></button>
            <h2><FaRegThumbsUp id='xicon'/>congratulations, you completed your task</h2>
        </div>
    </div>
  ) : "";
}
