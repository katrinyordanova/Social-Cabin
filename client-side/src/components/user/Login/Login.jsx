import React, { Component } from 'react';
import '../../shared-styles/UserForm/UserForm.scss';
import loginValidator from '../../../utils/userValidations/loginValidator/loginValidator';
import { toast } from 'react-toastify';

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
            this.setState({ isLogged : true });
            const data = {username, password};
            this.props.login(data, this.props.history).catch(error => {
                toast.error('Invalid username or password!');
                return;
            });
        }
    }

    render() {
        return <div className="container">
            <h1 className="container__header">Login</h1>
            <form className="container__form">
                <div className="container__form__username">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="container__form__password">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <button className="container__form__submit-button" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
    }
}

export default Login;