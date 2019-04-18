import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

class ResetPw extends Component {
  constructor() {
    super();
    this.state = {
      // usernameInput: "",
      passwordInput: "",
      passwordInputC: "",
      user: {}
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const params = { headers: { authorization: token } };
    Axios.get("http://localhost:9000/users/id", params).then(res => {
      console.log(res.data);
      this.setState({ user: res.data });
    });
  }
  // for input fields username input and password input
  editResetPwHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // reset pw submit
  resetPwSubmit = e => {
    e.preventDefault();
    if (this.state.passwordInput === this.state.passwordInputC) {
      // const username = this.state.usernameInput;
      // localStorage.setItem("username", username);
      // const password = this.state.passwordInput;
      // localStorage.setItem("password", password);
      // this.props.refresh();
      const id = this.state.user.id;
      const body = {
        password: this.state.passwordInput
      };
      let token = localStorage.getItem("token");
      const params = { headers: { authorization: token } };
      Axios.put(`http://localhost:9000/users/${id}`, body, params)
        .then(res => {
          localStorage.removeItem("token");
          alert("Password reset successful");
          this.props.refresh();
          this.props.history.push("/");
        })
        .catch(error => console.log(error));
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
        <h6>username: {this.state.user.username}</h6>
        <h6>email: {this.state.user.email}</h6>
        <p>Input new password to reset existing password.</p>
        <form onSubmit={this.resetPwSubmit}>
          {/* <div>
            Username: {"  "}
            <input
              name="usernameInput"
              type="text"
              onChange={this.editResetPwHandler}
              placeholder="Username"
              value={this.state.usernameInput}
              required
            />
          </div> */}
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
