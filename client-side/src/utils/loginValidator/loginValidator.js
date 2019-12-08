import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function loginValidator(username, password) {
    //check if user exists
    if (!username && !password) { 
        toast.error('Please enter your username and password to login');
        return false;
    }if (!username) { 
        toast.error('Please enter your username');
        return false;
    }if (!password) { 
        toast.error('Please enter your password');
        return false;
    }
    return true;
}