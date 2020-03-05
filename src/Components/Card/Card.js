import React from 'react';
import { Card } from 'react-bootstrap';

function NavCard(props){

    function sayHello() {
        alert('hi');
      }
    
    return(
        <Card bg="secondary" text="white" border="light" onClick={sayHello}>
           <Card.Img variant="top" src={props.img}/> 
           <Card.ImgOverlay>         
           <Card.Title>{props.title}</Card.Title>
           <Card.Text>{props.text}</Card.Text>
           </Card.ImgOverlay> 
        </Card>
        )
    }

export default NavCard;