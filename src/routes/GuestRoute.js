import React from 'react';

import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import authService from '../services/authService'


function guestRoute({element: Component, ...rest}) {
    const isAuthenticated = authService.isAuthenticated();
    return (
        <Route {...rest} element={(
            isAuthenticated
            ? <Home/>
            : Component
        )}/>
    )
}

export default guestRoute;