import React, { Component } from "react";
import { AuthContainer } from "../styles/reusableStyles";
import Register from "./Register";
import Login from "./Login";
import { Route, NavLink } from "react-router-dom";

class Auth extends Component {
  render() {
    return (
      <AuthContainer>
        <h1>Welcome to Todo App</h1>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <Route
          exact
          path="/register"
          render={props => <Register {...props} refresh={this.props.refresh} />}
        />
        <Route
          exact
          path="/login"
          render={props => <Login {...props} refresh={this.props.refresh} />}
        />
        {/* <Register /> */}
        {/* <Login /> */}
      </AuthContainer>
    );
  }
}

export default Auth;
