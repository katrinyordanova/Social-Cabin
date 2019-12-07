import React from 'react';
import userService from '../../services/userService';
import { Redirect } from 'react-router-dom';

function Logout() {
    userService.logout();
    return ( 
        <Redirect to="/" />
    )
}

export default Logout;