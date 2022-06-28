// import React, { useContext } from 'react';
// import { Route, useNavigate } from 'react-router-dom';
// import { useAuth } from  '../hooks/auth'; 

// const RoutePrivate = ({ component: Component, ...rest }) => {
//     const navigate = useNavigate();
//     const { token } = useAuth();

//     return (
//         <Route 
//         {...rest}
//         render={() => token ? <Component {...rest} /> : navigate('/')}
//         />
//     )
// }

// export default RoutePrivate;

import PropTypes from 'prop-types';
import { Route, useNavigate } from 'react-router-dom';

import { useAuth } from  '../hooks/auth'; 

export default function RouteWrapper({
  component: Component, 
  isPrivate,
  ...rest
}) {

    const navigate = useNavigate();
  const { token } = useAuth();
  
  const signed = !!token;

  if (!signed && isPrivate) {
    return navigate('/');
  }

  return (
            <Route 
            {...rest}
            render={() => token ? <Component {...rest} /> : navigate('/')}
            />
        )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};