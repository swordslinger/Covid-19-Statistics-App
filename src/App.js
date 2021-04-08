import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //controlls for the nav bar
import './App.css';
import { Bot } from './pageComponents/bot';
import { HealthInfo } from './pageComponents/healthInfo';
import { Home } from './pageComponents/home';
import { Images } from './pageComponents/images';
import { Login } from './pageComponents/login';
import { MapOfIreland } from './pageComponents/mapOfIreland';
import { Register } from './pageComponents/register';
import { Edit } from './pageComponents/edit';




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
            <Route path='/edit/:id' component={Edit}/>  {/* user sent here with unique id of each user*/}
           

          </Switch>

          <Bot></Bot>

        </div>
      </Router>
    );//change local time / date to bottom
  }//closing the render method
}

export default App;
