import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function editPostValidator(title, description) {
    if(!title && !description) {
        toast.error('Invalid post! Please fill both fields!');
        return false;
    }if(!title) {
        toast.error('Please write a title.');
        return false;
    }if(!description) {
        toast.error('Plase write a description.');
        return false;
    }
    return true;
} 