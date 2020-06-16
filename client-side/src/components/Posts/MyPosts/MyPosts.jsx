import React, { Component } from 'react';
import './MyPosts.scss';
import Post from '../Post/Post';
import postService from '../../../services/postService';

export default class MyPosts extends Component {
    state = {
        posts: null
    }

    componentDidMount() {
        const id = localStorage.getItem('user');
        postService.get.myPosts(id).then(posts => {
            if(posts.length > 0) {
                this.setState({ posts });
            }else {
                posts = null;
            }
        });
    }
    
    render() {
        const { posts } = this.state;

        return <div className="my-posts">
            <h1>My Posts</h1>
            { posts ? 
                <div>
                    {posts.map((post) => 
                        <Post key={post._id}>
                            <div className="my-posts__title">{post.title}</div>
                            <div className="my-posts__description">{post.description}</div>
                        </Post>)
                    }
                </div> : <div>No posts yet</div>
            }
        </div>
    }
}