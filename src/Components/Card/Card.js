import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

class Section extends Component{
render(){
    return(
        <Card>
           <Card.Title>Title</Card.Title>
           <Card.Text>text</Card.Text>
        </Card>
        )
    }
}

export default Section;