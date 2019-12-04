import React, { Component } from 'react';
import './Register.css';
import userService from '../../services/userService';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        userService.register(this.state.username, this.state.password)
        this.props.history.push('/login');        
    }

    render() {
        return <div className="Register">
            <form className="RegisterForm">
                <div className="Header">
                    <h1>Register</h1>
                </div>
                <div className="Username">
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="Password">
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="ConfirmPassword">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
                </div>
                <div className="FormButton">
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    }
}