import React from 'react'
import classes from './Cockpit.module.css'

const cockpit = (props) => {

  const assignedClasses = []
  const btnClass = props.showPersons ? classes.red : ''

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, it's React App Here</h1>
      <p className={assignedClasses.join(' ')}>This is really working !</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  )
}

export default cockpit