import React , { Component } from 'react';
import './DeletePost.css';
import postService from '../../../services/postService';
import Link from '../../links/Link';


class DeletePost extends Component {
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
        postService.deletePost();
        this.props.history.push('/');
    }

    render() {
        return <div className="DeletePost">
            <div className="Message">
                <h1>Sure you want to delete this cool post?</h1>
                <div className="Options">
                    <Link to="/">Yes</Link>
                    <Link to="/">No</Link>
                </div>
            </div>
            <div className="Heading">
                <h1>Delete post</h1>
            </div>
            <form>
                <div className="Title">
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} disabled={true} />
                </div>
                {/* value? */}
                <div className="Description">
                    <label>Description</label>
                    <textarea name="description" id="description" cols="30" rows="7" disabled={true}></textarea>
                </div>
                <div className="Author">
                    <label>Author</label>
                    <input type="text" name="author" value={this.state.author} disabled={true} />
                </div>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
    }
}

export default DeletePost;