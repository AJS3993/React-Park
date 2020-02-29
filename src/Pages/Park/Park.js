import React, {Component} from 'react';
import MainPic from '../../Components/MainPic/MainPic';
import NavCard from '../../Components/Card/Card';
import { Container, CardGroup, Button } from 'react-bootstrap';
import './Park.css';


class Park extends Component{
    
    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
      }
    
      sayHello() {
        alert('Hello!');
      }
    
    render(){
        return(
            <div>
                <MainPic/>

                <br/>
                    
                <Container>
                    
                        <CardGroup>
                            <Button onClick={this.sayHello}><NavCard title='Attractions' text='Attractions text here' img='https://media.cntraveler.com/photos/557afecd3a5d79a77fccaf68/4:3/w_480,c_limit/jurassic-world.jpg'/></Button>
                            <Button onClick={this.sayHello}><NavCard title='Tickets' text='Tickets text here' img='https://i.pinimg.com/originals/96/72/2d/96722d4d512565376f98ba3cfa06bd9a.jpg'/></Button>
                        </CardGroup>
                    
                   
                    
                        <CardGroup>
                            <Button onClick={this.sayHello}><NavCard title='Shop' text='Shop text here' img='https://vignette.wikia.nocookie.net/jurassicpark/images/b/b6/Jurassic-Park-panorama_Work_With_Your_Brain.jpg/revision/latest?cb=20100516211703'/></Button>
                            <Button onClick={this.sayHello}><NavCard title='Hotels' text='Hotels text here' img='https://www.uomeetingsandevents.com/Images/Galleries/JurassicPark/02_FullScreen/JP_1.jpg'/></Button>
                        </CardGroup>
                    
                </Container>

            </div>
        )
    }
}

export default Park;