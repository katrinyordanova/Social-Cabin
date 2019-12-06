import React, { Component } from 'react';
import './EditPost.css';
import postService from '../../../services/postService';

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
        postService.editPost();
        //push to edited post
        this.props.history.push();
    }

    render() {
        return <div className="EditPost">
            <div className="Heading">
                <h1>Edit post</h1>
            </div>
            <form>
                <div className="Title">
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
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

export default EditPost;