import React, { Component } from 'react';
import userService from '../../services/userService';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {
  render() {
    userService.logout().then(() => {
      this.setState({ isLogged: false });
      this.props.history.push('/');
    });
    return (
    <Redirect to="/" />
    ) 
  }
}