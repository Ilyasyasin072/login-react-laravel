import React from 'react';
import {Link} from 'react-router-dom';
import {removeUserSession} from '../../common/http-common';
const Dashboard = (props) => {    
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    const data = sessionStorage.getItem('user');
    return (
        <div>
            {data ? (<input type="button" onClick={handleLogout} value="logout"/>) : "Welcome Saja"} <br></br>
            {data ? <Link to="/customers">Customers</Link> : ''}
        </div>
    )
}

export default Dashboard;