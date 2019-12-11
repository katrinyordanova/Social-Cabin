import React, { Component } from 'react';
import '../../shared-styles/UserForm/UserForm.css';
import userService from '../../../services/userService';
import registerValidator from '../../../utils/userValidations/registerValidator/registerValidator';
import { toast } from 'react-toastify';

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
        const username = this.state.username; 
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword; 
        
        if(registerValidator(username, password, confirmPassword)) {
            const data = {username, password};
            userService.register(data).then(() => {
                this.props.history.push('/login');        
            }).catch(() => {
                toast.error('The username is already taken');
                return;
            });
        }
    }

    render() {
        return <div className="Register">
            <div className="Header">
                <h1>Register</h1>
            </div>
            <form className="RegisterForm">
                <div className="InputFields">
                    <div className="Username">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="Password">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="ConfirmPassword">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="Enter confirm password" value={this.state.confirmPassword} onChange={this.handleChange} />
                    </div>
                </div>    
                <div className="FormButton">
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    }
}