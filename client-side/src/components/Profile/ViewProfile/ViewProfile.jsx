import React, { Component } from 'react';
import './ViewProfile.css';
import Link from '../../links/Link';
import postService from '../../../services/postService';

class ViewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            posts: {}
        }
    }
    
    componentDidMount() {
        postService.get.many()
        .then(data =>
            data.forEach((post) => {
                this.setState({ posts: post })
            }))
    }

    render() {
        const { profile, posts } = this.state;
        
        // console.log(posts);
        return <div className="ViewProfile">
            <h1>My Profile</h1>
            <label>Username:</label>
            <label>{posts._id}</label>
            <label>Phone number:</label>
            {/* <label>{this.props.number}</label> */}
            <label>Gender:</label>
            {/* <label>{this.props.gender}</label> */}
            <div className="Buttons">
                <Link to="/edit-profile" className="EditButton">Edit</Link>
                <Link to="/delete-profile" className="DeleteButton">Delete</Link>
            </div>
        </div>
        
        
    }
}

export default ViewProfile;