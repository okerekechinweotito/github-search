import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dotenv from "dotenv";

import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import ErrorPage from "./components/ErrorPage";

dotenv.config();

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route path="/user/:username" component={UserProfile}/>
        <Route path="/error" component={ErrorPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </Router>
  );
}
