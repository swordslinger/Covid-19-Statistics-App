import React, { Component } from 'react';
import './App.css';

import { Home } from './pageComponents/home';
import { Login } from './pageComponents/login';
import { Register } from './pageComponents/register';
import { MapOfIreland } from './pageComponents/mapOfIreland';
import { HealthInfo } from './pageComponents/healthInfo';


import { Bot } from './pageComponents/bot';
import { Images } from './pageComponents/images';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';//controlls for the nav bar

class App extends Component {//importing a class from react
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/mapOfIreland">Map of ireland</Nav.Link>
              <Nav.Link href="/healthInfo">Health information</Nav.Link>

            </Nav>
          </Navbar>

          <Images></Images>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/healthInfo' component={HealthInfo} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/register' component={Register} exact />
            <Route path='/mapOfIreland' component={MapOfIreland} exact />
            {/* 
             
             
             */}

          </Switch>

          <Bot></Bot>

        </div>
      </Router>
    );//change local time / date to bottom
  }//closing the render method
}

export default App;
