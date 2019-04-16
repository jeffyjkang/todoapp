import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }

  // for input fields usernameinput and password input
  editLoginHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // to login, currently sets localstorage username, password
  loginSubmit = e => {
    e.preventDefault();
    // const username = this.state.usernameInput;
    // localStorage.setItem("username", username);
    // const password = this.state.passwordInput;
    // localStorage.setItem("password", password);
    const user = {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    };
    Axios.post("http://localhost:9000/users/login", user)
      .then(res => {
        // console.log(res);
        const token = res.data;
        // console.log(token);
        localStorage.setItem("token", token);
        this.props.refresh();
      })
      .catch(error => console.log(error));
    // axios call
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.loginSubmit}>
          <div>
            Username: {"  "}
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
            Password: {"  "}
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
        <NavLink to="/forgotpw">Forgot Password</NavLink>
      </div>
    );
  }
}

Login.propTypes = {
  refresh: PropTypes.func
};

export default Login;
