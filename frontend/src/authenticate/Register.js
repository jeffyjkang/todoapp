import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }
  editRegisterHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerSubmit = e => {
    e.preventDefault();
    const username = this.state.usernameInput;
    localStorage.setItem("username", username);
    const password = this.state.passwordInput;
    localStorage.setItem("password", password);
    window.location.reload();
    // axios call
  };

  render() {
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.registerSubmit}>
          <div>
            Username:
            <input
              name="usernameInput"
              type="text"
              onChange={this.editRegisterHandler}
              placeholder="Username"
              value={this.state.usernameInput}
              required
            />
          </div>
          <div>
            Password:
            <input
              name="passwordInput"
              type="password"
              onChange={this.editRegisterHandler}
              placeholder="Password"
              value={this.state.passwordInput}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
