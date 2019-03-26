import React, { Component } from "react";
import { AuthContainer } from "./StylesAuth";
import Register from "./Register";
import Login from "./Login";

class Auth extends Component {
  render() {
    return (
      <AuthContainer>
        <h1>Welcome to Todo App</h1>
        <Register />
        <Login />
      </AuthContainer>
    );
  }
}

export default Auth;
