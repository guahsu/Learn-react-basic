import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {
  state = {
    user: {
      name: 'unKnow'
    }
  }

  nameChangeHandler = (event) => {
    this.setState({
      user: {
        name: event.target.value
      }
    })
  }

  render() {
    const style = {
      title: {
        color: '#333'
      },
      userInput: {
        padding: '20px'
      },
      userOutput: {
        fontSize: '20px'
      }
    }
    
    return (
      <div className="App">
        <h1 style={style.title}>Hi, it's React App Here</h1>
        <UserInput style={style.userInput} changed={this.nameChangeHandler}></UserInput>
        <UserOutput style={style.userOutput} name={this.state.user.name}></UserOutput>
      </div>
    );
  }
}

export default App;
