import React from 'react';

const Dashboard = (props) => {
    const handleLogout = () => {
        props.history.push('/login');
    }
    return (
        <div>
            Welcome User! <br></br>
            <input type="button" onClick={handleLogout} value="logout"/>
        </div>
    )
}

export default Dashboard;