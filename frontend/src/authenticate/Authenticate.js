import React, { Component } from "react";
// import { Route } from "react-router-dom";

const Authenticate = Homepage => Auth =>
  class extends Component {
    state = {
      loggedIn: false
    };

    componentDidMount() {
      if (
        localStorage.getItem("username") &&
        localStorage.getItem("password")
      ) {
        this.setState({ loggedIn: true });
        this.props.history.push("/");
      } else {
        this.setState({ loggedIn: false });
      }
    }

    refresh = () => {
      this.componentDidMount();
    };

    render() {
      return (
        <div>
          {this.state.loggedIn ? <Homepage /> : <Auth refresh={this.refresh} />}
        </div>
      );
    }
  };

export default Authenticate;
