import React, { Component } from 'react';
import './MyPosts.scss';
import Post from '../Post/Post';
import Link from '../../links/Link';
import postService from '../../../services/postService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        }
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
                    {
                        posts.map((post) => 
                            <Post key={post._id}>
                                <div className="my-posts__posts__title">{post.title}</div>
                                <div className="my-posts__posts__description">{post.description}</div>
                                <div className="my-posts__posts__buttons">
                                    <Link to={"/edit-post/" + post._id} className="my-posts__posts__buttons__edit"><FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon></Link>
                                    <FontAwesomeIcon className="my-posts__posts__buttons__delete" icon={ faTrash }><button></button></FontAwesomeIcon>
                                </div>
                            </Post>
                        )
                    }
                </div> : <div><p className="my-posts__no-posts">No posts yet</p></div>
            }
        </div>
    }
}