import React from 'react';
import { Card, Button } from 'react-bootstrap';

function NavCard(props){

    return(
        <Card bg="secondary" text="white">
           <Card.Img variant="top" src={props.img}/>           
           <Card.Header>{props.title}</Card.Header>
           <Card.Text>{props.text}</Card.Text>
           <Button variant="primary">{props.button}</Button>
        </Card>
        )
    }

export default NavCard;