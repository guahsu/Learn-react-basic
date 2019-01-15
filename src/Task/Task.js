import React from 'react'
import './task.css'

const task = (props) => {
  return (
    <div className="task">
      <span className="task-name">{props.name}</span>
      <span className="task-remove" onClick={props.removeTask}>remove task</span>
    </div>
  )
}

export default task