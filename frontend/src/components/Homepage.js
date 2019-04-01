import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import { HomeContainer } from "../styles/reusableStyles";
import DummyData from "../dummyData/DummyData";
import ListView from "./views/ListView";
import TodoView from "./views/TodoView";
import CreateTodoView from "./views/CreateTodoView";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      selectedTodo: ""
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
    this.setState({ todos: [...this.state.todos, todo] });
    this.props.history.push(`/todo/${todo.id}`, todo);
  };
  render() {
    return (
      <HomeContainer>
        <Route
          path="/"
          render={props => <NavBar {...props} todos={this.state.todos} />}
        />
        {/* <NavBar /> */}
        {/* <ListView dummyData={this.state.dummyData} /> */}
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
      </HomeContainer>
    );
  }
}

export default Homepage;
