import React, { Component } from "react";

const Authenticate = Homepage => Auth =>
  class extends Component {
    state = {
      loggedIn: false
    };

    render() {
      return <div>{this.state.loggedIn ? <Homepage /> : <Auth />}</div>;
    }
  };

export default Authenticate;
