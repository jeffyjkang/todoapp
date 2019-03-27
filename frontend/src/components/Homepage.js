import React, { Component } from "react";
// import { Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import { HomeContainer } from "../styles/reusableStyles";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <HomeContainer>
        <NavBar />
        <p>Homepage</p>
      </HomeContainer>
    );
  }
}

export default Homepage;
