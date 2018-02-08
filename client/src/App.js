import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import AddCompany from "./pages/AddCompany";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
const App = () =>
  <Router>
    <div>

      <Header/>
       <div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <Sidebar/>
      </div>
          <div class="col-md-6">
      <Switch>
          <Jumbotron id="main">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/addcompany" component={AddCompany} />
        </Jumbotron>
      </Switch>
      </div>
        <div class="col-md-3">
        </div>
      </div>
      
    </div>
    <Footer
          topText="Blueberry"
          bottomText="Copyright 2018"
      />
    </div>

  </Router>;

export default App;