import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import Attractions from './Pages/Attractions/Attractions';
import Hotels from './Pages/Hotels/Hotels';
import Park from './Pages/Park/Park';
import Shop from './Pages/Shop/Shop';
import Tickets from './Pages/Tickets/Tickets';
import Login from './Pages/Login/Login';

export default function NavBar() {
  return (
    <Router>
      
      <Navbar bg="light" variant="light">
      <Nav className="mr-auto">

        <ul>
          
          <li>
            <Navbar.Brand href="/">Park</Navbar.Brand>
          </li>

          <li>
            <Nav.Link href="/attractions">Attractions</Nav.Link>
          </li>
          
        </ul>
      </Nav>
      <Nav>
        <ul>
          
          <li className='navRight'>
            <Nav.Link href="/tickets">Tickets</Nav.Link>
          </li>

          <li className='navRight'>
            <Nav.Link href="/shop">Shop</Nav.Link>
          </li>

          <li className='navRight'>
            <Nav.Link href="/hotels">Hotels</Nav.Link>
          </li>

          <li className='navRight'>
            <Nav.Link href="/login">Log In</Nav.Link>
          </li>
        
        </ul>
      </Nav>
      </Navbar>

        <Switch>
          
          <Route exact path="/">
            <Park />
          </Route>

          <Route path="/attractions">
            <Attractions />
          </Route>
          
          <Route path="/tickets">
            <Tickets />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/hotels">
            <Hotels />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        
        </Switch>
      
      
    </Router>
  );
}

