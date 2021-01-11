import "./App.css";

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SelectUsersToPlay from "./pages/SelectUserstoPlay";
import PlayArea from "./pages/PlayArea";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact>
          <SelectUsersToPlay />
        </Route>
        <Route path="/play">
          <PlayArea />
        </Route>
      </div>
    );
  }
}
