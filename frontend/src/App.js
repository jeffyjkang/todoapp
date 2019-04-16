import React, { Component } from "react";
import Authenticate from "./authenticate/Authenticate";
import Auth from "./authenticate/Auth";
import Homepage from "./components/Homepage";
import { Route } from "react-router-dom";

import "./App.css";
// HOC Authenticate pass in Homepage and Auth
const AuthComponent = Authenticate(Homepage)(Auth);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" component={AuthComponent} />
        {/* <AuthComponent /> */}
      </div>
    );
  }
}

export default App;
