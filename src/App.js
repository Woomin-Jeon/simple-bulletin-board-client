import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from './component/Menu.js';
import Posts from "./component/Posts";
import Navigation from "./component/Navigation";
import Writing from "./pages/Writing";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/writing">
            <Writing />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
