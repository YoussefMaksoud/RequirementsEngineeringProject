import {Button} from '../Button'
import SignUpTextbox from '../SignUpForm/Textbox'
import './LoginForm.css'
import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Product from '../Product/Product'


class LoginForm extends React.Component {
    render(){
    return (
            <form className = 'login-form'>
                <header className = "create-acc">Create Account</header>
                <div>
                    <SignUpTextbox placeholder = "Email Address" type = 'text'/>
                </div>
                <div>
                    <SignUpTextbox placeholder = "Password" type = "password"/>
                </div>
            </form>
        ) 
    }
}



export default LoginForm;