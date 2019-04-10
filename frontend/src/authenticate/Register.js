import React, { Component } from "react";
import PropTypes from "prop-types";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: "",
      passwordInputC: ""
    };
  }

  // for input fields usernameinput and password input
  editRegisterHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // to register, currently sets localstorage username, password
  registerSubmit = e => {
    e.preventDefault();
    if (this.state.passwordInput === this.state.passwordInputC) {
      const username = this.state.usernameInput;
      localStorage.setItem("username", username);
      const password = this.state.passwordInput;
      localStorage.setItem("password", password);
      this.props.refresh();
    } else {
      alert("Passwords do not match!");
      this.setState({
        passwordInput: "",
        passwordInputC: ""
      });
    }
    // axios call
  };

  render() {
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
          <div>
            Confirm Password: {"  "}
            <input
              name="passwordInputC"
              type="password"
              onChange={this.editRegisterHandler}
              placeholder="Confirm Password"
              value={this.state.passwordInputC}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  refresh: PropTypes.func
};

export default Register;
