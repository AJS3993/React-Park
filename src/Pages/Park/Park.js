import React, {Component} from 'react';
import MainPic from '../../Components/MainPic/MainPic';
import Section from '../../Components/Card/Card';
import './Park.css';


class Park extends Component{
    render(){
        return(
            <div>
                <MainPic/>
                <Section/>
            </div>
        )
    }
}

export default Park;