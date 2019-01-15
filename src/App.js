import React, { Component } from 'react';
import './App.css';
import Task from './Task/Task'
import TaskInput from './TaskInput/TaskInput'

class App extends Component {
  state = {
    taskName: '',
    tasks: [
      { id: 1, name: 'Task1' },
      { id: 2, name: 'Task2' },
      { id: 3, name: 'Task3' },
      { id: 4, name: 'Task4' },
      { id: 5, name: 'Task5' },
    ]
  }

  updateTaskName = (event) => {
    this.setState({taskName: event.target.value})
  }

  addTask = () => {
    if (this.state.taskName) {
      const tasks = [...this.state.tasks]
      tasks.push({
        id: tasks.length + 1,
        name: this.state.taskName
      })
      this.setState({tasks: tasks})
      this.setState({name: ''})
    }
  }

  removeTask = (index) => {
    const tasks = [...this.state.tasks]
    tasks.splice(index, 1)
    this.setState({tasks: tasks})
  }

  render() {
    const tasks = (
      <div>
        {this.state.tasks.map((task, index) => {
          return (
            <Task
              name={task.name}
              key={task.id}
              removeTask={() => this.removeTask(index)} />
          )
        })}
      </div>
    )

    return (
      <div className="App">
        <h1>Hi, it's React App Here</h1>
        <TaskInput updateTaskName={this.updateTaskName} addTask={this.addTask}></TaskInput>
        {tasks}
      </div>
    );
  }
}

export default App;
