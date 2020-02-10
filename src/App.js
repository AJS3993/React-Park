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
      <div>
        
        <ul>
          <li>
            <Link to="/">Park</Link>
          </li>
          
          <li>
            <Link to="/tickets">Tickets</Link>
          </li>
          
          <li>
            <Link to="/attractions">Attractions</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
        
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          
          <Route exact path="/">
            <Park />
          </Route>
          
          <Route path="/tickets">
            <Tickets />
          </Route>
          
          <Route path="/attractions">
            <Attractions />
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

// You can think of these components as "pages"
// in your app.


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

