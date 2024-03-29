import React, { PureComponent } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false)

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
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
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
    // Good way
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
    // Bad way
    // this.setState({
    //   showPersons: !doesShow,
    //   toggleClicked: this.state.toggleClicked + 1
    // })
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

  // Unsafe legacy lifecycle, look at console
  shouldComponentUpdate (nextProps, nextState) {
    console.log('[Update App.js] inside shouldComponentUpdate', nextProps, nextState)
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons
  }

  // new LifeCycle hook
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('[Update App.js] inside getDerivedStateFromProps', nextProps, prevState)
    return prevState
  }

  // Unsafe legacy lifecycle, look at console
  componentWillUpdate (nextProps, nextState) {
    console.log('[Update App.js] inside componentWillUpdate', nextProps, nextState)
  }

  // new LifeCycle hook
  getSnapshotBeforeUpdate () {
    console.log('[Update App.js] inside getSnapshotBeforeUpdate')
    console.log('in getSnapshotBeforeUpdate get body height =', document.body.offsetHeight)
  }


  componentDidUpdate () {
    console.log('[Update App.js] inside componentDidUpdate')
    console.log('in componentDidUpdate get body height =', document.body.offsetHeight)
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log('App.js inside render')
    let persons = null
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }
 
    return (
      <>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          clicked={this.togglePersonHandler}
          showPersons={this.state.showPersons}
          login={this.loginHandler}
          persons={this.state.persons} />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </>
    );
  }
}

export default withClass(App, classes.App)
