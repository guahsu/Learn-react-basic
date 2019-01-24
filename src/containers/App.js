import React, { PureComponent } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends PureComponent {
  constructor (props) {
    super(props)
    console.log('App.js inside constructor', props)
    this.state = {
      persons: [
        { id: 1, name: 'Gua', age: 29 },
        { id: 2, name: 'Chi', age: 30 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount () {
    console.log('App.js inside componentWillMount')
  }

  componentDidMount () {
    console.log('App.js inside componentDidMount')
  }

  // state = {
  //   persons: [
  //     { id: 1, name: 'Gua', age: 29 },
  //     { id: 2, name: 'Chi', age: 30 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Chi', age: 30 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id )
    // const person = Object.assign({}, this.state.persons[personIndex])
    const person = {...this.state.persons[personIndex]} // same as up there but better
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons})
  }


  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[Update App.js] inside shouldComponentUpdate', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('[Update App.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate () {
    console.log('[Update App.js] inside componentDidUpdate')
  }

  render() {
    console.log('App.js inside render')
    // let persons = null
    // if (this.state.showPersons) {
    //   persons = <Persons
    //     persons={this.state.persons}
    //     clicked={this.deletePersonHandler}
    //     changed={this.nameChangeHandler} />
    // }
 
    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          clicked={this.togglePersonHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons} />
        { this.state.showPersons 
          ? <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
          : null
        }
      </div>
    );
  }
}

export default App;
