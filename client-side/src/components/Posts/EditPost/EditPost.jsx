import React, { Component } from 'react';
import './EditPost.css';
import postService from '../../../services/postService';

export default class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post : null
        }
    }

    componentDidMount() {
        
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const data = {
            title: this.props.title, 
            description: this.props.description
        }

        const id = this.props.match.params.id;

        postService.get.one(id, data);alert('me')
            .then((post) => {
                this.setState({ post });
            });
    }

    render() {
        return <div className="EditPost">
           <div className="Heading">
                <h1>Edit post</h1>
            </div>
            <form>
                <div>
                    <label>Title</label>
                    <input type="text">{this.props.title}</input>
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" cols="40" rows="10">{this.props.description}</textarea>
                </div>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
    }
}
// import React, { Component } from 'react';
// import './EditPost.css';
// import '../../shared-styles/UserForm/UserForm.css';
// import '../../shared-styles/ProfileAndPostForms/ProfileAndPostForms.css'
// import postService from '../../../services/postService';

// class EditPost extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             description: 'What\'s on your mind'
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         const title = this.state.title;
//         const description = this.state.description;
//         console.log(this.props);
//         const postId = this.props.location.key;
//         const data = { title, description };
//         postService.edit(postId, data).then(() => {
//             this.props.history.push();
//         });
//     }

//     render() {
//         return <div className="EditPost">
//             <div className="Heading">
//                 <h1>Edit post</h1>
//             </div>
//             <form>
//                 <div>
//                     <label>Title</label>
//                     <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
//                 </div>
//                 <div>
//                     <label>Description</label>
//                     <textarea name="description" id="description" cols="40" rows="10"></textarea>
//                 </div>
//                 <button type="button" onClick={this.handleSubmit}>Submit</button>
//             </form>
//         </div>
//     }
// }

// export default EditPost;