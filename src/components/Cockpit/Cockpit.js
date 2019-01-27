import React from 'react'
import classes from './Cockpit.module.css'

const cockpit = (props) => {

  const assignedClasses = []
  let btnClass = classes.button

  if (props.showPersons) {
    btnClass = [classes.button, classes.red].join(' ')
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <>
      <h1>{ props.appTitle }</h1>
      <p className={assignedClasses.join(' ')}>This is really working !</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Switch Name
      </button>
      <button onClick={props.login}>Log in</button>
    </>
    // It's same way to do empty wrapping use <> & </>
    // <>
    //   <h1>{ props.appTitle }</h1>
    //   <p className={assignedClasses.join(' ')}>This is really working !</p>
    //   <button
    //     className={btnClass}
    //     onClick={props.clicked}>
    //     Switch Name
    //   </button>
    // </>
  )
}

export default React.memo(cockpit)