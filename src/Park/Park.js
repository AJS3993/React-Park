import React, {Component} from 'react';
import MainPic from '../Components/MainPic/MainPic'
import './Park.css';


class Park extends Component{
    render(){
        return(
            <div>
                <h1>Park</h1>
                <MainPic/>
            </div>
        )
    }
}

export default Park;