import React, { Component } from 'react'
import ReactPlayer from "react-player"
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div>
                <ReactPlayer url = "https://www.youtube.com/watch?v=JxEGUMzOlC0" playing = 'true' loop = 'true' volume = '0' className = "vid"/>
            </div>
        )
    }
}

export default Home;