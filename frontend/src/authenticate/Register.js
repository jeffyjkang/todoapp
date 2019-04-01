import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }

  // for input fields usernameinput and passwordinput
  editRegisterHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // to register, currently sets localstorage username, password
  registerSubmit = e => {
    e.preventDefault();
    const username = this.state.usernameInput;
    localStorage.setItem("username", username);
    const password = this.state.passwordInput;
    localStorage.setItem("password", password);
    this.props.refresh();
    // axios call
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.registerSubmit}>
          <div>
            Username: {"  "}
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
            Password: {"  "}
            <input
              name="passwordInput"
              type="password"
              onChange={this.editRegisterHandler}
              placeholder="Password"
              value={this.state.passwordInput}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;