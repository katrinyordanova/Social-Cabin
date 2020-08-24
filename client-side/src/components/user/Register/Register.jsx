import React from 'react';
import '../../shared-styles/UserForm/UserForm.scss';
import userService from '../../../services/userService';
import registerValidator from '../../../utils/userValidations/registerValidator/registerValidator';
import { toast } from 'react-toastify';
import { useFormFields } from '../../../custom-hooks/login-hook';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [ fields, handleFieldChange ] = useFormFields({ username: '', password: '', confirmPassword: '' });
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(registerValidator(fields.username, fields.password, fields.confirmPassword)) {
            const username = fields.username;
            const password = fields.password;
            userService.register({ username, password }).then(() => {
                history.push('/login');      
            }).catch(() => {
                toast.error('The username is already taken');
                return;
            });
        }
    }

    return <div className="container">
        <h1 className="container__header">Register</h1>
        <form className="container__form">
            <div className="container__form__username">
                <label>Username</label>
                <input type="text" name="username" placeholder="Enter username" defaultValue={fields.username} onChange={handleFieldChange} />
            </div>
            <div className="container__form__password">
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password" defaultValue={fields.password} onChange={handleFieldChange} />
            </div>
            <div className="container__form__confirm-password">
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Enter confirm password" defaultValue={fields.confirmPassword} onChange={handleFieldChange} />
            </div>
            <button className="container__form__submit-button" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
}

export default Register;