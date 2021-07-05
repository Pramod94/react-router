import React, { useContext, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { AuthContext } from '../App';

const Login = () => {
    const { state } = useLocation();
    const auth = useContext(AuthContext);
    console.log("Auth",auth);
    const [login, setLogin] = useState(false);
    console.log("From location", state);

    const { from } = state || { from: { pathname: '/' } };

    const handleLogin = () => {
        setLogin(true);
        auth.isAuthenticated = true;
    }

    if (login) {
        return <Redirect to={from} />
    }
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
