import React, { Component } from 'react';
import './EditPost.scss';
import Post from '../Post/Post';
import postService from '../../../services/postService';
import editPostValidator from '../../../utils/postValidations/editPost';

export default class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const postId = this.props.match.params.id;
        postService.get.one(postId)
        .then(post => {
            post = JSON.parse(post);
            this.setState({ post });
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const title = this.state.title;
        const description = this.state[Object.keys(this.state)[Object.keys(this.state).length - 1]];
        if(editPostValidator(title, description)) {
            const data = { title, description };
            postService.edit(this.state.post._id, data).then(() => {
                this.props.history.push('/my-posts');
            });
        }
    }

    render() {
        const { post } = this.state;

        return <div className="edit-post">
            <h1 className="edit-post__heading">Edit post</h1>
            <form className="edit-post__form" id="edit-post-background">
            {post ?
                <div>
                    <Post key={post._id}>
                        <div className="edit-post__form__title">
                            <label className="edit-post__form__title__label">Title</label>
                            <input className="edit-post__form__title__input" type="text" name="title" defaultValue={post.title} onChange={this.handleChange} />
                        </div>
                        <div className="edit-post__form__description">
                            <label className="edit-post__form__description__label">Description</label>
                            <textarea className="edit-post__form__description__textarea" name="description" defaultValue={post.description} onChange={this.handleChange} cols="40" rows="10" />
                        </div>
                        <button className="edit-post__form__submit-button" type="button" onClick={this.handleSubmit}>Submit</button>
                    </Post>
                </div> : null
            }
            </form>
        </div>
    }
}