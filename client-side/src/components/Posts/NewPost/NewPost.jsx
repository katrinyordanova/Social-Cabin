import React from 'react';
import './NewPost.scss';
import postService from '../../../services/postService';
import newPostValidator from '../../../utils/postValidations/createPost';
import { useFormFields } from '../../../custom-hooks/update-form-fields';
import { useHistory } from 'react-router-dom';

const NewPost = () => {
    const [ fields, handleFieldChange ] = useFormFields({ title: '', description: '' });
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = fields.title;
        const description = fields.description;
        const username = localStorage.getItem('user');
        if(newPostValidator(title, description)) {
            postService.create({ title , description, username }).then(() => {
                history.push('/');
            });
        }
    }

    return <div className="new-post">
        <h1 className="new-post__heading">Create a new post</h1>
        <form className="new-post__form">
            <div className="new-post__form__title">
                <label className="new-post__form__title__label">Title</label>
                <input className="new-post__form__title__input" type="text" name="title" placeholder="Write a title" defaultValue={fields.title} onChange={handleFieldChange} />
            </div>
            <div className="new-post__form__description">
                <label className="new-post__form__description__label">Description</label>
                <textarea className="new-post__form__description__textarea" name="description" placeholder="What's on your mind?" defaultValue={fields.value} onChange={handleFieldChange} cols="40" rows="10" />
            </div>
            <button className="new-post__form__submit-button" type="button" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
}

export default NewPost;