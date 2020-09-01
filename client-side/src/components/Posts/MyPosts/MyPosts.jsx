import React, { useState, useEffect } from 'react';
import './MyPosts.scss';
import Post from '../Post/Post';
import Link from '../../links/Link';
import postService from '../../../services/postService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const MyPosts = () => {
    const [ myPosts, setMyPosts ] = useState(null);
    const [ deleteMessage, setDeleteMessage ] = useState(false);
    const [ deleteMyPostId, setDeleteMyPostId ] = useState(null);

    const toggleDeleteMessage = () => setDeleteMessage(!deleteMessage);

    const handleDeleteMessage = (id) => {
        setDeleteMessage(!deleteMessage);
        setDeleteMyPostId(id);
    }
        
    useEffect(() => {
        const id = localStorage.getItem('user');
        postService.get.myPosts(id).then(myPosts => {
            if(myPosts.length > 0) {
                setMyPosts(myPosts);
            }else {
                myPosts = null;
            }
        });
    }, []);
    
    const deletePostMessage = () => {
        postService.delete(deleteMyPostId).then(() => {
            const posts = myPosts.filter(post => post._id !== deleteMyPostId);
            setMyPosts(posts);
            toggleDeleteMessage();
        });
    }

    return <div className="my-posts">
        <h1 className="my-posts__heading">My Posts</h1>
        { myPosts ?
            <div className="my-posts__posts">
                {
                    myPosts.map((myPost) => 
                        <Post key={myPost._id}>
                            <div className="my-posts__posts__title">{myPost.title}</div>
                            <div className="my-posts__posts__description">{myPost.description}</div>
                            <div className="my-posts__posts__buttons">
                                <Link to={"/edit-post/" + myPost._id} className="my-posts__posts__buttons__edit">
                                    <FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon>
                                </Link>
                                <FontAwesomeIcon 
                                    onClick={() => handleDeleteMessage(myPost._id)} className="my-posts__posts__buttons__delete"
                                    icon={ faTrash }>
                                </FontAwesomeIcon>
                                <div className={deleteMessage ? "my-posts__posts__show-deleteMessage" : "my-posts__posts__hide-deleteMessage"}>
                                    <h1>Delete this post?</h1>
                                    <button className="my-posts__posts__show-deleteMessage__delete-button" 
                                        onClick={() => deletePostMessage()}>Delete
                                    </button>
                                    <button className="my-posts__posts__show-deleteMessage__cancel-button" 
                                        onClick={toggleDeleteMessage}>Cancel
                                    </button>
                                </div>
                            </div>
                        </Post>
                    )
                }
            </div> : <div><p className="my-posts__no-posts">No posts yet</p></div>
        }
    </div>
}

export default MyPosts;