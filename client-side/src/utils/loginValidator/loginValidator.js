import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function loginValidator(username, password) {
    if (!username && !password) { 
        toast.error('Please enter your username and password to login');
        return false;
    }
    return true;
}