import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Dashboard from '../dashboard/dashboard';
import Home from '../home/home';
import Login from '../login/login';
import Customers from '../customers';
import CreateCustomer from '../customers/create_customer';
const Router = () => {
    const data = sessionStorage.getItem('user');
    return (
        <div>
            <div className="header">
            {/* <Navbar bg="dark">
                    <Navbar.Brand href="#home">
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
            </Navbar.Brand>
                </Navbar> */}
               {data ? ( <div><NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/dashboard">dashboard</NavLink>
                <NavLink activeClassName="active" to="/customers">Customers</NavLink></div>) 
                : <NavLink activeClassName="active" to="/login">Login</NavLink>  }
                        
            </div>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/customers" component={Customers}/>
                <Route path="/create/customer" component={CreateCustomer}/>
                <Route path="/login" component={Login} />
            </div>
        </div>
    )
}

export default Router;