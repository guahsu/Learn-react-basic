import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Gua', age: 29 },
      { name: 'Chi', age: 30 }
    ],
    otherState: 'some other value'
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
        <hi>Hi, it's React App Here</hi>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Test1')}>
          Switch Name
        </button>
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
      </div>
    );
  }
}

export default App;
