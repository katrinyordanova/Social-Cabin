import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function newPostValidator(title, description) {
    if(!title && description) {
        toast.error('Please fill in the title and description fields to create a post'); 
        return false;
    }if(!title || title.length < 5) {
        toast.error('Title must be at least 5 characters long'); 
        return false;
    }if(description.length < 20) {
        toast.error('Description must be at least 20 characters long'); 
        return false;
    }
    return true;
}

