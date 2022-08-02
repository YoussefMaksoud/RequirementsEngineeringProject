import React, { Component} from 'react'
import './NavBar.css'
import {Button} from '../Button';
import {Link} from 'react-router-dom';



class Navbar extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){

        return(
            <>
                <div calssName = "nav">
                <nav className = "NavbarItems">
                    <h1 className = "navbar-logo">CADA</h1>
                    <div className = "menu-icon" onClick = {this.handleClick}>
                        <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <li className = 'nav-links'>
                        <Link to = "/home" style={{ textDecoration: 'none' }}>
                            <a className = 'home'>Home</a>
                        </Link>
                        <Link to = "/about" style={{ textDecoration: 'none' }}>
                            <a className = 'about'>About</a>
                        </Link>
                        <Link to = "/product" style={{ textDecoration: 'none' }}>
                            <a className = 'product'>Product</a>
                        </Link>
                        <Link to = "/contact-us" style={{ textDecoration: 'none' }}>
                        <a className = 'contact-us'>Contact Us</a>
                        </Link>
                    </li>
                    <Link to = "/sign-up">
                        <Button>Sign Up</Button> 
                    </Link>      
                    <Link to = "/login">         
                        <Button>Login</Button>
                    </Link>
                </nav>
                </div>
            </>
        );
    }
}

export default Navbar;