import React from 'react'

const taskInput = (props) => {
  return (
    <div>
      <input className="task-input" type="text" onChange={props.updateTaskName} />
      <button className="task-add" onClick={props.addTask}>ADD TASK</button>
    </div>
  )
}

export default taskInput