import React, {Component} from 'react';
import MainPic from '../../Components/MainPic/MainPic';
import Section from '../../Components/Card/Card';
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
                        <Col><Section/></Col>
                        <Col><Section/></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col><Section/></Col>
                        <Col><Section/></Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Park;