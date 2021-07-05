import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
// import { auth } from './Components/Login';
import { AuthContext } from './App';

const PrivateRoute = ({ compoent: Component, ...rest }) => {
    const location = useLocation();
    const auth = useContext(AuthContext);
return (
    <Route {...rest}>
        {
            auth.isAuthenticated ?
            <Component /> :
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
        }
    </Route>
);
};

export default PrivateRoute;
