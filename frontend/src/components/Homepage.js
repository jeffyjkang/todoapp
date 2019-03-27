import React, { Component } from "react";
// import { Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import { HomeContainer } from "../styles/reusableStyles";
import DummyData from "../dummyData/DummyData";
import ListView from "./views/ListView";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: []
    };
  }
  componentDidMount() {
    this.setState({ dummyData: DummyData });
  }
  render() {
    return (
      <HomeContainer>
        <NavBar />
        {/* <p>Homepage</p> */}
        <ListView dummyData={this.state.dummyData} />
      </HomeContainer>
    );
  }
}

export default Homepage;
