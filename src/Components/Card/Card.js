import React from 'react';
import { Card, Button } from 'react-bootstrap';

function NavCard(props){

    return(
        <Card>
           <Card.Img variant="top" src='https://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/6v/gb/p06vgbzj.jpg'/>           
           <Card.Title>{props.title}</Card.Title>
           <Card.Text>Text</Card.Text>
           <Button variant="primary">Go somewhere</Button>
        </Card>
        )
    }

export default NavCard;