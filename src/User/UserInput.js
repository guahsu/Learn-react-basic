import React from 'react';

const userInput = (props) => {
  return (
    <div>
      <input style={props.style} type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default userInput;