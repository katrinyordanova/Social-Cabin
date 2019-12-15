import React, { Component} from 'react';
import './Posts.css';
import Post from '../Post/Post';
import postService from '../../../services/postService';

export default class Posts extends Component {
    state = {
        posts: null
    }
    textInput = null;

    componentDidMount() {
        postService.get.many().then(posts => {
            this.setState({ posts });
        });
    }

    render() {
        const { posts } = this.state;

        return <div>
            {posts ? 
                <div className="Posts">
                    {posts.map((post) =>
                    <Post className="Post" key={post._id} >
                    <div className="PostTitle">{post.title}</div>
                    <div className="PostDescription">{post.description}</div>
                    <div className="PostAuthor">By: {post.author[0].username}</div>
                    {/* <div className="PostButtons">
                        <a href={"/edit-post/" + post._id}>Edit</a>
                        <a href={"/delete-post/" + post._id}>Delete</a>
                    </div> */}
                    </Post>)}
                </div> : <div>Loading...</div>
            }
        </div>
    }
}