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
    const user = {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    };
    Axios.post("https://todoapp-backend-api.herokuapp.com/users/login", user)
      .then(res => {
        const token = res.data;
        localStorage.setItem("token", token);
        this.props.refresh();
      })
      .catch(error => console.log(error));
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
