import React from 'react';
import './Post.css';

function Post() {
    return <div className="Post">
        <h1>{title}</h1>
        <p>{description}</p>
        <small>{author}</small>
    </div>
}

export default Post;