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
    }

    componentDidMount() {
        postService.get.many().then(posts => {
            const likes = posts.map((post) => post.like);
            this.setState({ posts, like: likes });// ok
        });
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
                            </Post>
                        )
                    }
                </div> : <div>Loading...</div>
            }
        </div>
    }
}