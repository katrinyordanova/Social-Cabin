import React, { Component } from 'react';
import './Login.css';
import userService from '../../services/userService';
import loginValidator from '../../utils/loginValidator/loginValidator';

class Login extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;

        if (loginValidator(username, password)) {
            const data = {username, password};
            userService.login(data);
            this.props.history.push('/');        
        }
    }

    render() {
        return <div className="Login">
            <form className="LoginForm">
                <div className="Header">
                    <h1>Login</h1>
                </div>
                <div className="InputFields">
                    <div className="Username">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="Password">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="FormButton">
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    }
}

export default Login;