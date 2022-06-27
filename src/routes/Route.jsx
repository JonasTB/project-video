import React, { useContext } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Context from '../hooks/context';

const RoutePrivate = ({ component: Component, ...rest }) => {
    const { token } = useContext(Context);
    const navigate = useNavigate();

    return (
        <Route 
        {...rest}
        render={() => token ? <Component {...rest} /> : navigate('/')}
        />
    )
}