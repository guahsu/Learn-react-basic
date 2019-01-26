import React, { PureComponent } from 'react';
import propTypes from 'prop-types'
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor (props) {
    super(props)
    console.log('Persons.js inside constructor', props)
    this.lastPersonRef = React.createRef()
  }

  componentWillMount () {
    console.log('Persons.js inside componentWillMount')
  }

  componentDidMount () {
    console.log('Persons.js inside componentDidMount')
    this.lastPersonRef.current.focusInput()
  }

  componentWillUnmount () {
    console.log('Persons.js inside componentWillUnmount')
  }

  componentWillReceiveProps (nextProps) {
    console.log('[Update Persons.js] inside componentWillReceiveProps', nextProps)
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[Update Person.js] inside shouldComponentUpdate', nextProps, nextState)
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.changed
  //   // return true
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('[Update Persons.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate () {
    console.log('[Update Persons.js] inside componentDidUpdate')
    console.log('ssssssss', this.props.position)
  }

  render () {
    console.log('Persons.js inside render')
    return this.props.persons.map((person, index) => {
      return <Person
        position={index}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
        name={person.name}
        age={person.age}
        ref={this.lastPersonRef}
        authenticated={this.props.isAuthenticated}
        key={person.id}/>
    })
  }
}

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func
}

export default Persons