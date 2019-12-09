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
        postService.allPosts().then(posts => {
            this.setState({ posts });
        });
    }

    render() {
        const { posts } = this.state;

        return <div>
            {posts ? 
                <div className="Posts">
                    {posts.map((post) => 
                    <Post className="Post" key={post._id} author={post.author}>{post.description}< br/>{post.image}</Post>)}
                </div> : <div>Loading...</div>
            }
        </div>
    }
}
