import React, {Component} from 'react';
import NavCard from '../../Components/Card/Card';
import { Container, CardGroup } from 'react-bootstrap';
import './Attractions.css';

class Attractions extends Component{
    render(){
        return(
            <div>
                <h1>Attractions</h1>
                
                <br/>
                    
                <Container>
                    
                        <CardGroup>
                            <NavCard title='Safari Spheres' text='text here' img='https://media.cntraveler.com/photos/557afecd3a5d79a77fccaf68/4:3/w_480,c_limit/jurassic-world.jpg'/>
                            <NavCard/>
                        </CardGroup>
                    
                   
                    
                        <CardGroup>
                            <NavCard/>
                            <NavCard/>
                        </CardGroup>
                    
                </Container>
            </div>
        )
    }
}

export default Attractions;