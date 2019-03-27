import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }

  // for input fields usernameinput and passwordinput
  editLoginHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // to login, currently sets localstorage username, password
  loginSubmit = e => {
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
        <h3>Login</h3>
        <form onSubmit={this.loginSubmit}>
          <div>
            Username:
            <input
              name="usernameInput"
              type="text"
              onChange={this.editLoginHandler}
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
              onChange={this.editLoginHandler}
              placeholder="Password"
              value={this.state.passwordInput}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
