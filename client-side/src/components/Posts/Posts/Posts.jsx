import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './Posts.scss';
import postService from '../../../services/postService';

export default function Posts() {
    const [ posts, setPosts ] = useState(null);

    useEffect(() => {
        postService.get.many().then(posts => {
            setPosts(posts);
        });
    }, []);

    return <div>
        { posts ? 
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