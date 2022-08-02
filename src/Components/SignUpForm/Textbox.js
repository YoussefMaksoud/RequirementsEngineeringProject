import React, { Component } from 'react'
import './Textbox.css'
class SignUpTextbox extends Component{

    render(){

        return(
            <input className = "box" placeholder = {this.props.placeholder} type = {this.props.text}></input>
        )
    }
}

export default SignUpTextbox;