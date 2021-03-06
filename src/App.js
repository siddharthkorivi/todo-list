import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/layout/AddTodo'
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Add some todos!",
        completed: false
      }
    ]
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id
      )]
    })
  }

  addTodo = title => {
    if (title.trim() !== '') {
      const newTodo = {
        id: this.state.todos.length + 1,
        title,
        completed: false,
      }
      this.setState({ todos: [...this.state.todos, newTodo] })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
