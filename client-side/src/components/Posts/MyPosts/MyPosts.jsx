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
            posts: null,
            deleteMessage: false
        }
        this.deletePostMessage = this.deletePostMessage.bind(this);
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

    deletePostMessage(postId) {
        this.setState({ deleteMessage: false });
        postService.delete(postId)
            .then(() => {
                const posts = this.state.posts.filter(post => post._id !== postId);
                this.setState({ posts });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { posts } = this.state;
        console.log(this.state.deleteMessage);
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
                                    <FontAwesomeIcon onClick={() => this.setState({ deleteMessage: true })} className="my-posts__posts__buttons__delete" icon={ faTrash }><button></button></FontAwesomeIcon>
                                </div>
                                <div className={this.state.deleteMessage ? "my-posts__posts__show-deleteMessage" : "my-posts__posts__hide-deleteMessage"}>
                                    <h1>Delete this post?</h1>
                                    <button className="my-posts__posts__show-deleteMessage__delete-button" onClick={() => this.deletePostMessage(post._id)}>Delete</button>
                                    <button className="my-posts__posts__show-deleteMessage__cancel-button" onClick={() => this.setState( { deleteMessage: false }) }>Cancel</button>
                                </div>
                            </Post>
                        )
                    }
                </div> : <div><p className="my-posts__no-posts">No posts yet</p></div>
            }
        </div>
    }
}