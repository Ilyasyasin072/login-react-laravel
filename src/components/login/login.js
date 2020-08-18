import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from '../../common/http-common';
const Login = (props) => {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading , setLoading] = useState(false);
    // const history = useHistory();

    const handleLogin = () => {
        setError(null);
        setLoading(null);
        const url = 'http://192.168.0.94:8001/api/v1/login';
        axios.post(url,{username: username.value, password: password.value} ).then(result => {
            setLoading(true);
            console.log(result.data.username);
            setUserSession(result.data.token, result.data.username);
            props.history.push('/dashboard');
            console.log(result);
        })
        // .catch(error => {
        //     setLoading(false);
        //     if(error.result.status === 401) setError(error.response.data.massage);
        //     else setError("Something went Wrong Pleaste Try Again");
        // })
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <p>Usename</p>
                <input type="text" {...username} autoComplete="new-password"/>
            </div>
            <div>
                <p>Password</p>
                <input type="password" {...password} autoComplete="new-password"/>
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }

    return {
        value, onChange: handleChange
    }
}

export default Login;