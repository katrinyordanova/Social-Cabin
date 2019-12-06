import React, { Component } from 'react';
import './NewPost.css';
import postService from '../../../services/postService';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            author: ''
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
        const data = '';
        postService.createPost(data).then(() => {
            this.props.history.push('/my-posts');
        });
    }

    render() {
        return <div className="NewPost">
            <div className="Heading">
                <h1>Create a new post</h1>
            </div>
            <form>
                <div className="Title">
                    <label>Title</label>
                    <input type="text" name="title" value={this.props.title} onChange={this.handleChange} />
                </div>
                <div className="Description">
                    <label>Description</label>
                    <textarea name="description" id="description" cols="30" rows="7"></textarea>
                </div>
                <div className="Author">
                    <label>Author</label>
                    <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
                </div>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
    }
}

export default NewPost;