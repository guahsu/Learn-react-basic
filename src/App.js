import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Gua', age: 29 },
      { id: 2, name: 'Chi', age: 30 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

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

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}/>
          })}
        </div>
      )
      style.backgroundColor = 'red'
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
 
    return (
      <div className="App">
        <h1>Hi, it's React App Here</h1>
        <p className={classes.join(' ')}>This is really working !</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
