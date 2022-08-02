import React, { Component } from 'react'
import './SignUpForm.css'
import {Button} from '../Button'
import SignUpTextbox from './Textbox';
import {Link} from 'react-router-dom'

function SignUpForm() {
    return (
            <form className = 'sign-up-form'>
                <header className = "create">Create Account</header>
                <div>
                    <SignUpTextbox placeholder = "First Name" text = 'text'/>
                </div>
                <div>
                    <SignUpTextbox placeholder = "Last Name" text = 'text'/>
                </div>
                <div>
                    <SignUpTextbox placeholder = "Email Address" text = 'text'/>
                </div>
                <div>
                    <SignUpTextbox placeholder = "Password" text = 'password'/>
                </div>
                <div>
                    <SignUpTextbox placeholder = "Confirm Password" text = 'password'/>
                </div>
                <div>
                    <Link to = './login'>
                        <Button>Create Account</Button>
                    </Link>
                </div>
            </form>
        ) 
    }



export default SignUpForm;