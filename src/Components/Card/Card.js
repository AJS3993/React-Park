import React from 'react';
import { Card, Button } from 'react-bootstrap';

function NavCard(props){

    return(
        <Card>
           <Card.Img variant="top" src={props.img}/>           
           <Card.Title>{props.title}</Card.Title>
           <Card.Text>{props.text}</Card.Text>
           <Button variant="primary">{props.button}</Button>
        </Card>
        )
    }

export default NavCard;