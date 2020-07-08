import React, { Component } from 'react';
import Post from '../Post/Post';
import './Posts.scss';
import postService from '../../../services/postService';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        }
        this.likePost = this.likePost.bind(this);
    }

    componentDidMount() {
        postService.get.many().then(posts => {
            this.setState({ posts });
        });
    }

    likePost(id) {

    }

    render() {
        const { posts } = this.state;
        return <div>
            {posts ? 
                <div className="posts">
                    {
                        posts.map((post) =>
                            <Post key={post._id}>
                                <div className="posts__post__title">{post.title}</div>
                                <div className="posts__post__description">{post.description}</div>
                                <div className="posts__post__author">By: {post.author[0].username}</div>
                                <button onClick={() => { this.likePost(post._id) }}>Like</button>{post.like}
                            </Post>
                        )
                    }
                </div> : <div>Loading...</div>
            }
        </div>
    }
}