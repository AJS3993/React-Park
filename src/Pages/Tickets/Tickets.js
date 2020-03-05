import React, {Component} from 'react';
import NavCard from '../../Components/Card/Card';
import { Container, CardGroup } from 'react-bootstrap';
import './Tickets.css';

class Tickets extends Component{
    render(){
        return(
            <div>
                <h1>Tickets</h1>
                <Container>
                <CardGroup>
                <NavCard title='All-Inclusive Park Pass'/>
                <NavCard title='Family Pass'/>
                </CardGroup>
                </Container>
            </div>
        )
    }
}

export default Tickets;