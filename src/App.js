import React, { Component } from 'react';
import './App.css';
import { Home } from './pageComponents/home';
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
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Brand href="#login">Login</Navbar.Brand>
            <Navbar.Brand href="#register">Register</Navbar.Brand>
            <Navbar.Brand href="#mapOfIreland">Map of ireland</Navbar.Brand>
            <Navbar.Brand href="#healthInfo">Health information</Navbar.Brand>
            <Nav className="mr-auto">
              
            </Nav>
          </Navbar>

          <Images></Images>
          
            <Switch>
              <Route path='/' component={Home} exact />
             {/* 
             <Route path='/login' component={Login} exact />
             <Route path='/register' component={Register} exact />
             <Route path='/mapOfIreland' component={MapOfIreland} exact />
             <Route path='/healthInfo' component={HealthInfo} exact />
             */}

            </Switch>
            
            <Bot></Bot>
         

          
        </div>
      </Router>
    );//change local time / date to bottom
  }//closing the render method
}

export default App;
