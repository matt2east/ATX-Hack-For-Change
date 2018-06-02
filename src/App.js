import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import NavBar from "./components/NavBar";
import Tips from "./components/Tips";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <NavBar />
          </div>
          <header className="App-header">
            <h1 className="App-title">Clean Air</h1>
            <h3>Do your share for clean air</h3>
          </header>
          <Home />
          {/* <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/tips" component={Tips} />
          </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
