import React, { Component } from 'react';
import './NewPost.scss';
import postService from '../../../services/postService';
import newPostValidator from '../../../utils/postValidations/createPost';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: 'What\'s on your mind??'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        const username = localStorage.getItem('user');
        if(newPostValidator(title, description)) {
            const data = { title , description, username };
            postService.create(data).then(() => {
                this.props.history.push('/');
            });
        }
    }

    render() {
        return <div className="new-post">
            <h1 className="new-post__heading">Create a new post</h1>
            <form className="new-post__form">
                <div className="new-post__form__title">
                    <label className="new-post__form__title__label">Title</label>
                    <input className="new-post__form__title__input" type="text" name="title" placeholder="Write a title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="new-post__form__description">
                    <label className="new-post__form__description__label">Description</label>
                    <textarea className="new-post__form__description__textarea" placeholder="What's on your mind?" value={this.state.description} onChange={this.handleChange} cols="40" rows="10" />
                </div>
                <button className="new-post__form__submit-button" type="button" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
    }
}

export default NewPost;