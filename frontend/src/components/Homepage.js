import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import { HomeContainer } from "../styles/reusableStyles";
import DummyData from "../dummyData/DummyData";
import ListView from "./views/ListView";
import TodoView from "./views/TodoView";
import CreateTodoView from "./views/CreateTodoView";
import EditTodoView from "./views/EditTodoView";
import DeleteTodoView from "./views/DeleteTodoView";
import PropTypes from "prop-types";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      selectedTodo: {}
    };
  }
  // when component mounts bring in dummydata array
  componentDidMount() {
    this.setState({ todos: DummyData });
  }
  // function to select specific todo
  selectTodoHandler = todo => {
    this.setState({ selectedTodo: todo });
  };
  // function to return selected todo
  returnTodo = () => {
    return this.state.selectedTodo;
  };
  // create todo
  createTodoSubmit = todo => e => {
    e.preventDefault();
    this.selectTodoHandler(todo);
    this.setState({ todos: [...this.state.todos, todo] });
    this.props.history.push(`/todo/${todo.id}`, todo);
  };
  // edit todo
  editTodoSubmit = todo => e => {
    e.preventDefault();
    this.selectTodoHandler(todo);
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === todo.id) {
        this.state.todos.splice(i, 1, todo);
      }
    }
    this.setState({ todos: [...this.state.todos] });
    this.props.history.push(`/todo/${todo.id}`, todo);
  };
  // delete todo
  deleteTodoSubmit = todo => e => {
    e.preventDefault();
    this.selectTodoHandler(todo);
    // this.state.todos.splice(todo.id, 1);
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === todo.id) {
        this.state.todos.splice(i, 1);
      }
    }
    this.setState({ todos: [...this.state.todos] });
    this.props.history.push("/");
  };
  // sign out
  signOut = e => {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    this.props.logOut();
    this.props.history.push("/");
  };
  render() {
    return (
      <HomeContainer>
        <Route
          path="/"
          render={props => (
            <NavBar
              {...props}
              todos={this.state.todos}
              signOut={this.signOut}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <ListView
              {...props}
              todos={this.state.todos}
              selectTodoHandler={this.selectTodoHandler}
            />
          )}
        />
        <Route
          path="/todo/:id"
          render={props => <TodoView {...props} todo={this.returnTodo()} />}
        />
        <Route
          path="/create"
          render={props => (
            <CreateTodoView
              {...props}
              todos={this.state.todos}
              createTodoSubmit={this.createTodoSubmit}
            />
          )}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <EditTodoView
              {...props}
              todo={this.returnTodo()}
              editTodoSubmit={this.editTodoSubmit}
            />
          )}
        />
        <Route
          path="/delete/:id"
          render={props => (
            <DeleteTodoView
              {...props}
              todo={this.returnTodo()}
              deleteTodoSubmit={this.deleteTodoSubmit}
            />
          )}
        />
      </HomeContainer>
    );
  }
}

Homepage.propTypes = {
  logOut: PropTypes.func
};

export default Homepage;
