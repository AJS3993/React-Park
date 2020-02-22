import React,{ Component } from 'react';
import Navbar from './Components/Navbar/Navbar'

class App extends Component {
    render(){
        return(
            <div style={{
                backgroundImage: 'url(https://www.lefthudson.com/wp-content/uploads/2019/11/jurassic-world-backgrounds-unique-jurassic-park-background-premier-live-casino-2019-of-jurassic-world-backgrounds.jpg)'}}>
                <Navbar/>
            </div>
        )
    }
}

export default App