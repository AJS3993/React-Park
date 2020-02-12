import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import Attractions from './Attractions/Attractions';
import Hotels from './Hotels/Hotels';
import Park from './Park/Park';
import Shop from './Shop/Shop';
import Tickets from './Tickets/Tickets';

export default function BasicExample() {
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
        
        </Switch>
      
      
    </Router>
  );
}

