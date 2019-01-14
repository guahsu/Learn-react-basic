import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Gua', age: 29 },
      { name: 'Chi', age: 30 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was click')
    // DONT' DO THIS: this.state.persons[0].name = 'GuaHsu'
    // USE setState
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Gua', age: 29 },
        { name: event.target.value, age: 30 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    return (
      <div className="App">
        <h1>Hi, it's React App Here</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {this.state.showPersons ?
          <div >
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Test2')}
              changed={this.nameChangeHandler}>
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Test2')}
              changed={this.nameChangeHandler}>
            </Person>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
