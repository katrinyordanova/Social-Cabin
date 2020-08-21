import React from 'react';
import '../../shared-styles/UserForm/UserForm.scss';
import userService from '../../../services/userService';
import loginValidator from '../../../utils/userValidations/loginValidator/loginValidator';
import { toast } from 'react-toastify';
import { useFormFields } from '../../../custom-hooks/login-hook';
// import { useHistory } from 'react-router-dom';


export default function Login() { 
    const [ fields, handleFieldChange ] = useFormFields({ username: '', password: '' });
    // const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(loginValidator(fields.username, fields.password)) {
            userService.login(fields).then(() => {
                localStorage.setItem('user', fields.username);
                // history.push('/');
            }).catch(error => {
                toast.error('Invalid username or password!');
                return;
            });
        }
    }

    return <div className="container">
             <h1 className="container__header">Login</h1>
             <form className="container__form">
                 <div className="container__form__username">
                     <label>Username</label>
                     <input type="text" name="username" placeholder="Enter username" defaultValue={fields.username} onChange={handleFieldChange} />
                 </div>
                 <div className="container__form__password">
                     <label>Password</label>
                     <input type="password" name="password" placeholder="Enter password" defaultValue={fields.password} onChange={handleFieldChange} />
                 </div>
                 <button className="container__form__submit-button" onClick={handleSubmit}>Submit</button>
             </form>
         </div>
}