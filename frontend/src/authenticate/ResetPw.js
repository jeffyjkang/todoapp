import React, { Component } from "react";
import PropTypes from "prop-types";

class ResetPw extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: "",
      passwordInputC: ""
    };
  }
  // for input fields username input and password input
  editResetPwHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // reset pw submit
  resetPwSubmit = e => {
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
    // axios call to edit user
  };

  render() {
    return (
      <div>
        <h3>Reset Password</h3>
        <p>Input new password to reset existing password.</p>
        <form onSubmit={this.resetPwSubmit}>
          <div>
            Username: {"  "}
            <input
              name="usernameInput"
              type="text"
              onChange={this.editResetPwHandler}
              placeholder="Username"
              value={this.state.usernameInput}
              required
            />
          </div>
          <div>
            New Password: {"  "}
            <input
              name="passwordInput"
              type="password"
              onChange={this.editResetPwHandler}
              placeholder="New Password"
              value={this.state.passwordInput}
              required
            />
          </div>
          <div>
            Confirm New Password: {"  "}
            <input
              name="passwordInputC"
              type="password"
              onChange={this.editResetPwHandler}
              placeholder="Confirm New Password"
              value={this.state.passwordInputC}
              required
            />
          </div>
          <button type="submit">Submit New Password</button>
        </form>
      </div>
    );
  }
}

ResetPw.propTypes = {
  refresh: PropTypes.func
};

export default ResetPw;
