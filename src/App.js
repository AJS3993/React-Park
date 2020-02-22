import React,{ Component } from 'react';
import Navbar from './Components/Navbar/Navbar'

class App extends Component {
    render(){
        return(
            <div style={{
                backgroundColor: 'rgb(245,255,245)'}}>
                <Navbar/>
            </div>
        )
    }
}

export default App