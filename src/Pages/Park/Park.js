import React, {Component} from 'react';
import MainPic from '../../Components/MainPic/MainPic';
import NavCard from '../../Components/Card/Card';
import { Container, Row, Col } from 'react-bootstrap';
import './Park.css';


class Park extends Component{
    render(){
        return(
            <div>
                <MainPic/>

                <br/>
                    
                <Container>
                    <Row>
                        <Col><NavCard title='Attractions'/></Col>
                        <Col><NavCard title='Tickets'/></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col><NavCard title='Shop'/></Col>
                        <Col><NavCard title='Hotels'/></Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Park;