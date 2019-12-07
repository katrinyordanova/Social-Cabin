import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function registerValidator(username, password, confirmPassword) {
    if(username === '' || username.length < 6) {
        toast.error('Username must be at least 6 characters long');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        return false;
    }

    if (confirmPassword !== password) {
        toast.error('Both passwords must match')
        return false;
    }

    return true;
}
