import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import { HomeContainer } from "../styles/reusableStyles";
// import DummyData from "../dummyData/DummyData";
import ListView from "./views/ListView";
import TodoView from "./views/TodoView";
import CreateTodoView from "./views/CreateTodoView";
import EditTodoView from "./views/EditTodoView";
import DeleteTodoView from "./views/DeleteTodoView";
import PropTypes from "prop-types";
import Axios from "axios";

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
    // this.setState({ todos: DummyData });
    const token = localStorage.getItem("token");
    // console.log(token);
    const params = { headers: { authorization: token } };
    // console.log(headers);
    Axios.get("http://localhost:9000/todos", params)
      .then(res => {
        // console.log(res);
        this.setState({ todos: res.data });
      })
      .catch(error => console.log(error));
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
    // this.selectTodoHandler(todo);
    // this.setState({ todos: [...this.state.todos, todo] });
    // this.props.history.push(`/todo/${todo.id}`, todo);
    //
    let todoId = 0;
    const token = localStorage.getItem("token");
    const params = { headers: { authorization: token } };
    Axios.post("http://localhost:9000/todos", todo, params)
      .then(res => {
        // console.log(res.data);
        todoId = res.data;
        this.componentDidMount();
      })
      .then(() => {
        this.selectTodoHandler(todo);
        this.props.history.push(`/todo/${todoId}`);
      })
      .catch(error => console.log(error));
  };
  // edit todo
  editTodoSubmit = todo => e => {
    e.preventDefault();
    // this.selectTodoHandler(todo);
    // for (let i = 0; i < this.state.todos.length; i++) {
    //   if (this.state.todos[i].id === todo.id) {
    //     this.state.todos.splice(i, 1, todo);
    //   }
    // }
    // this.setState({ todos: [...this.state.todos] });
    // this.props.history.push(`/todo/${todo.id}`, todo);
    const todoId = todo.id;
    const body = {
      title: todo.title,
      date: todo.date,
      description: todo.description
    };
    const token = localStorage.getItem("token");
    const params = { headers: { authorization: token } };
    Axios.put(`http://localhost:9000/todos/${todoId}`, body, params)
      .then(res => {
        // console.log(res);
        this.componentDidMount();
      })
      .then(() => {
        this.selectTodoHandler(todo);
        this.props.history.push(`/todo/${todoId}`);
      })
      .catch(error => console.log(error));
  };
  // delete todo
  deleteTodoSubmit = todo => e => {
    e.preventDefault();
    console.log(todo);
    // this.selectTodoHandler(todo);
    // for (let i = 0; i < this.state.todos.length; i++) {
    //   if (this.state.todos[i].id === todo.id) {
    //     this.state.todos.splice(i, 1);
    //   }
    // }
    // this.setState({ todos: [...this.state.todos] });
    //
    const id = todo.id;
    const token = localStorage.getItem("token");
    const params = { headers: { authorization: token } };
    Axios.delete(`http://localhost:9000/todos/${id}`, params)
      .then(res => {
        console.log(res.data);
        this.componentDidMount();
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };
  // sign out
  signOut = e => {
    e.preventDefault();
    // localStorage.removeItem("username");
    // localStorage.removeItem("password");
    localStorage.removeItem("token");
    this.props.logOut();
    this.props.history.push("/");
  };
  render() {
    // console.log(this.state);
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
