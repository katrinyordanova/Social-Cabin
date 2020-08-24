import React from 'react';
import '../../shared-styles/UserForm/UserForm.scss';
import loginValidator from '../../../utils/userValidations/loginValidator/loginValidator';
import { useFormFields } from '../../../custom-hooks/login-hook';

const Login = ({ login, history }) => {
    const [ fields, handleFieldChange ] = useFormFields({ username: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(loginValidator(fields.username, fields.password)) {
            login(history, fields);
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

export default Login;