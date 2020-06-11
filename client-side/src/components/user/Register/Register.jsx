import React, { Component } from 'react';
import '../../shared-styles/UserForm/UserForm.scss';
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
        return <div className="container">
            <h1 className="container__header">Register</h1>
            <form className="container__form">
                <div className="container__form__username">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="container__form__password">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="container__form__confirm-password">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder="Enter confirm password" value={this.state.confirmPassword} onChange={this.handleChange} />
                </div>
                <button className="container__form__submit-button" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
    }
}