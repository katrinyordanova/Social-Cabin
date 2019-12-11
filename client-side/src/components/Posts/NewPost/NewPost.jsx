import React, { Component } from 'react';
import './NewPost.css';
import '../../shared-styles/ProfileAndPostForms/ProfileAndPostForms.css';
import '../../shared-styles/UserForm/UserForm.css';
import postService from '../../../services/postService';
import newPostValidator from '../../../utils/postValidations/createPost/createPost';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: 'What\'s on your mind?'
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
        // const image = this.fileInput.current.files[0].name;
        if(newPostValidator(title, description)) {
            const data = { title , description };
            postService.create(data).then(() => {
                this.props.history.push('/');
            });
        }
    }

    render() {
        return <div className="NewPost">
            <div className="Heading">
                <h1>Create a new post</h1>
            </div>
            <form>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Write a title" value={this.props.title} onChange={this.handleChange} />
                </div>
                <div className="Description">
                    <label>Description</label>
                    <textarea name="description" placeholder="What's on your mind?" value = {this.state.value} onChange = {this.handleChange} cols="40" rows="10" />
                </div>
                {/* <div className="UploadFile">
                    <label>Upload File</label>
                    <input type="file" ref={this.fileInput} />
                </div> */}
                <div>
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    }
}

export default NewPost;