import React, { Component } from 'react';
import './MyPosts.scss';
import Post from '../Post/Post';
import Link from '../../links/Link';
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
            <h1 className="my-posts__heading">My Posts</h1>
            { posts ? 
                <div className="my-posts__posts">
                    {posts.map((post) => 
                        <Post key={post._id}>
                            <div className="my-posts__posts__title">{post.title}</div>
                            <div className="my-posts__posts__description">{post.description}</div>
                            <div className="PostButtons">
                                <Link to={"/edit-post/" + post._id}>Edit</Link>
                                <Link to={"/delete-post/" + post._id}>Delete</Link>
                            </div>
                        </Post>)
                    }
                </div> : <div><p className="my-posts__no-posts">No posts yet</p></div>
            }
        </div>
    }
}