import React, { Component } from 'react';
import './NewPost.css';
import postService from '../../../services/postService';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: 'What\'s on your mind?',
        }
        this.fileInput = React.createRef();
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
        const image = this.fileInput.current.files[0].name;
        const data = { title, description, image };
        console.log(data);
        postService.createPost(data).then(() => {
            this.props.history.push('/');
        }).catch(() => {alert('create post error'); return;})
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
                    <textarea name="description" value = {this.state.value} onChange = {this.handleChange} cols="30" rows="7" />
                </div>
                <div className="UploadFile">
                    <label>Upload File</label>
                    <input type="file" ref={this.fileInput} />
                </div>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
    }
}

export default NewPost;