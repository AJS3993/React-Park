import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Attractions from './Attractions/Attractions';
import Hotels from './Hotels/Hotels';
import Park from './Park/Park';
import Shop from './Shop/Shop';
import Tickets from './Tickets/Tickets';

export default function BasicExample() {
  return (
    <Router>
      <div className='nav'>

        <ul>
          
          <li>
            <Link to="/">Park</Link>
          </li>

          <li>
            <Link to="/attractions">Attractions</Link>
          </li>
          
          <li className='navRight'>
            <Link to="/tickets">Tickets</Link>
          </li>

          <li className='navRight'>
            <Link to="/shop">Shop</Link>
          </li>

          <li className='navRight'>
            <Link to="/hotels">Hotels</Link>
          </li>
        
        </ul>
      
      

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
      </div>
    </Router>
  );
}

