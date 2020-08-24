import React, { useEffect, useState } from 'react';
import './EditPost.scss';
import Post from '../Post/Post';
import postService from '../../../services/postService';
import editPostValidator from '../../../utils/postValidations/editPost';
import { useFormFields } from '../../../custom-hooks/update-form-fields';
import { useHistory } from 'react-router-dom';

const EditPost = () => {
    const [ post, setPost ] = useState(null);
    const [ fields, handleChangeFields ] = useFormFields({ title: '', description: '' });
    const history = useHistory();

    useEffect(() => {
        const postId = history.location.pathname.split('/')[2]
        postService.get.one(postId).then(post => {
            console.log(post);
            post = JSON.parse(post);
            setPost(post);
        });
    }, []); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = fields.title;
        const description = fields.description
        if(editPostValidator(title, description)) {
            postService.edit(post._id, { title, description }).then(() => {
                history.push('/my-posts');
            });
        }
    }

    return <div className="edit-post">
        <h1 className="edit-post__heading">Edit post</h1>
        <form className="edit-post__form" id="edit-post-background">
        { post ?
            <div>
                <Post key={post._id}>
                    <div className="edit-post__form__title">
                        <label className="edit-post__form__title__label">Title</label>
                        <input className="edit-post__form__title__input" type="text" name="title" 
                        defaultValue={post.title} onChange={handleChangeFields} />
                    </div>
                    <div className="edit-post__form__description">
                        <label className="edit-post__form__description__label">Description</label>
                        <textarea className="edit-post__form__description__textarea" name="description" 
                        defaultValue={post.description} onChange={handleChangeFields} cols="40" rows="10" />
                    </div>
                    <button className="edit-post__form__submit-button" type="button" onClick={handleSubmit}>Submit</button>
                </Post>
            </div> : null
        }
        </form>
    </div>
}

export default EditPost;