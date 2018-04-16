import React, { Component } from 'react';
import './App.css';

// class TodoRow extends Component {
//   render() {
//     const todoItem = this.props.todoItem;
//     return (
//       <li>{todoItem}</li>
//     );
//   }
// }

const TodoRow = ({todo}) => (
  <li>{todo}</li>
);

class TodoList extends Component {
  render() {
    const rows = [];

    this.props.todos.forEach((todo, index) => {
      rows.push(
        <TodoRow key={index} todo={todo} />
      )
    });

    return (
      <ol className="todoList">
        {rows}
      </ol>
    );
  }
}

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {inputTodo: ''};

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(newTodo) {
    this.props.onFormSubmit(newTodo);
  }
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.handleClick(this.state.inputTodo);
        this.setState({ inputTodo: ''});
      }}>
        <input
          className="todo-input"
          type="text"
          autoComplete="off"
          placeholder="What needs to be done?"
          value={this.state.inputTodo}
          name="inputTodo"
          onChange={(e) => this.setState({[e.target.name]: e.target.value })}
        />
        <button type="submit" className="save-button" value="Save">Save</button>
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos : TODO_MOCK};

    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(todo) {
    const copy = this.state.todos.slice();
    copy.push(todo);
    console.log(copy);
    this.setState({
      todos: copy
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Simple Todo App</h1>
        </header>
        <div>
          <InputForm onFormSubmit={this.addTodo}/>
        </div>
        <div className="todo-content">
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

const TODO_MOCK = [
  "Wash fish",
  "Feed car"
];

export default App;
