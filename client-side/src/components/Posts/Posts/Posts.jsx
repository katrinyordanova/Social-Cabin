import React, { Component } from 'react';
import Post from '../Post/Post';
import './Posts.scss';
import Link from '../../links/Link';
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
                <div className="posts">
                    {posts.map((post) =>
                    <Post key={post._id}>
                        <div className="posts__post__title">{post.title}</div>
                        <div className="posts__post__description">{post.description}</div>
                        <div className="posts__post__author">By: {post.author[0].username}</div>
                        <div className="PostButtons">
                            <Link to={"/edit-post/" + post._id}>Edit</Link>
                            <Link to={"/delete-post/" + post._id}>Delete</Link>
                        </div>
                    </Post>)}
                </div> : <div>Loading...</div>
            }
        </div>
    }
}