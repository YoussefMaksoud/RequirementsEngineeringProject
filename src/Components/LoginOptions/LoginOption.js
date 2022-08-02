import {Button} from '../Button'
import './LoginOption.css'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';

function LoginOption() {
    return (
            <form className = 'login-option'>
                <h1 classname = "l">Login</h1>
                <hr />
                <div className = "client">
                    <Link to = "/ListVehicles">
                    <Button>Client</Button>
                    </Link>
                </div>
                <hr />
                <div className = "man">
                    <Link to = "/ListStaff">
                    <Button>Manager</Button>
                    </Link>
                </div>
                <hr />
                <div className = "sales-rep">
                    <Link to = "/ListClients">
                    <Button>Sales Representative</Button>
                    </Link>
                </div>
                <div>
                    <LoginForm />
                </div>
            </form>
        ) 
    }



export default LoginOption;