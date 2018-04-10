import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import Header from "./includes/Header.js"
import Home from "./pages/Home.js"
import Listings from "./pages/Listings.js"
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mario"
    };
  }

  render() {
    return (
      <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/philly/community/artists"
        component={Listings}/>
      </div>
      </Router>
    );
  }
}
