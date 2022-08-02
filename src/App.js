import './App.css';
import Navbar from './Components/NavBar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUpForm from './Components/SignUpForm/SignUpForm'
import LoginOption from './Components/LoginOptions/LoginOption'
import Product from './Components/Product/Product'
import ListClients from './Components/UserViews/ListClients'
import ListStaff from './Components/UserViews/ListStaff'
import ListVehicles from './Components/UserViews/ListVehicles'
import Home from './Components/Home'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path = '/'>
          <Route path = '/home' component = {Home}></Route>
            <Route path = '/about'></Route>
            <Route path = '/product' component = {Product}></Route>
            <Route path = '/contact-us'></Route>
            <Route path = '/sign-up' component = {SignUpForm}></Route>
            <Route path = '/login' exact component = {LoginOption}></Route>
            <Route path = '/ListVehicles' component = {ListVehicles}></Route>
            <Route path = '/ListClients' component = {ListClients}></Route>
            <Route path = '/ListStaff' component = {ListStaff}></Route>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
