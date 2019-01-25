import React, { Component } from 'react';
import classes from './Person.module.css'
import withClass from '../../../hoc/withClass'

class Person extends Component {
  constructor (props) {
    super(props)
    console.log('Person.js inside constructor', props)
    this.inputElement = React.createRef()
  }

  componentWillMount () {
    console.log('Person.js inside componentWillMount')
  }

  componentDidMount () {
    console.log('Person.js inside componentDidMount')
    this.focusInput()
  }

  focusInput () {
    this.inputElement.current.focus()
    // don't do any style or display with ref in react, it's bad way
  }

  render () {
    console.log('Person.js inside render')
    return <>
      <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old !</p>
      <p>{this.props.children}</p>
      <input
        ref={this.inputElement} // the name it's up to you
        type="text"
        onChange={this.props.changed}
        value={this.props.name}/>
    </>
  }
}

export default withClass(Person, classes.Person);