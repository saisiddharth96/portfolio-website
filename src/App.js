import React, { Component } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MainPage from "./MainPage.js"
import RandomTVShowGenerator from "./RandomTV/Random.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path = "/randomtvgenerator" component = {RandomTVShowGenerator}/>
        </div>
      </Router>
    );
  }
}

export default App;
