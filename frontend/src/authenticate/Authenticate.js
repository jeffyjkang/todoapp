import React, { Component } from "react";
import { Route } from "react-router-dom";

const Authenticate = Homepage => Auth =>
  class extends Component {
    state = {
      loggedIn: false
    };

    // as HOC component mounts, if username and password exists set state of loggedIn to true
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

    logOut = () => {
      this.setState({ loggedIn: false });
    };

    refresh = () => {
      this.componentDidMount();
    };
    // if loggedIn is true, return homepage, if loggedIn is false, return auth
    render() {
      return (
        <div>
          {this.state.loggedIn ? (
            // <Route component={Homepage} loggedIn={this.state.loggedIn} />
            <Route
              path="/"
              render={props => <Homepage {...props} logOut={this.logOut} />}
            />
          ) : (
            <Auth refresh={this.refresh} />
          )}
        </div>
      );
    }
  };

export default Authenticate;
