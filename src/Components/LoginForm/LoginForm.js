import  {Button}  from 'react-bootstrap';
import React from "react";
import { Link } from "react-router-dom";



const Login = props => {

  let nav = props.user ? (
    <div>

      <Link to="" className="Login-link btn" onClick={props.handlelogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="Login-welcome">{props.user.name}</span>

    </div>
    
  ) : (
    <div>

      
      <Button variant="success"><Link to="/login" className="Login-link">
        LOG IN
      </Link></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="success"><Link to="/signup" className="Login-link">
        SIGN UP
      </Link></Button>
    

    </div>
  )
  
  return <div className="Login">{nav}</div>;
};

export default Login;