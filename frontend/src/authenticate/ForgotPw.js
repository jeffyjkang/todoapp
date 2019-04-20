import React, { Component } from "react";
import Axios from "axios";

class ForgotPw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      emailInput: "",
      passwordInput: "",
      passwordInputC: ""
    };
  }
  // for input fields username input and password input
  editForgotPwHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // forgot pw submit
  forgotPwSubmit = e => {
    e.preventDefault();
    if (this.state.passwordInput === this.state.passwordInputC) {
      const params = {
        headers: {
          username: this.state.usernameInput,
          email: this.state.emailInput,
          password: this.state.passwordInput
        }
      };
      Axios.get("http://localhost:9000/users/forgotpw", params)
        .then(res => {
          if (res.data.length < 50) {
            alert(`${res.data}`);
          } else {
            const token = res.data;
            localStorage.setItem("token", token);
            this.props.history.push("/resetpw");
          }
        })
        .catch(error => console.log(error));
    } else {
      alert("Passwords do not match!");
      this.setState({
        passwordInput: "",
        passwordInputC: ""
      });
    }
  };
  render() {
    return (
      <div>
        <h3>Forgot Password</h3>
        <p>
          In order to reset password, please notify admin at: email@email.com,
          for a temporary password.
        </p>
        <form onSubmit={this.forgotPwSubmit}>
          <div>
            Username: {"  "}
            <input
              name="usernameInput"
              type="text"
              onChange={this.editForgotPwHandler}
              placeholder="Username"
              value={this.state.usernameInput}
              required
            />
          </div>
          <div>
            E-mail: {"  "}
            <input
              name="emailInput"
              type="email"
              onChange={this.editForgotPwHandler}
              placeholder="E-mail"
              value={this.state.emailInput}
              required
            />
          </div>
          <div>
            Temporary Password: {"  "}
            <input
              name="passwordInput"
              type="password"
              onChange={this.editForgotPwHandler}
              placeholder="Temporary Password"
              value={this.state.passwordInput}
              required
            />
          </div>
          <div>
            Confirm Temporary Password: {"  "}
            <input
              name="passwordInputC"
              type="password"
              onChange={this.editForgotPwHandler}
              placeholder="Confirm Temporary Password"
              value={this.state.passwordInputC}
              required
            />
          </div>
          <button type="submit">Submit Temporary Password</button>
        </form>
      </div>
    );
  }
}

export default ForgotPw;
