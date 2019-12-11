import React from 'react';
import './Post.css';
import Link from '../../links/Link';

function Post({ children }) {
    return <div className="Post" >
        {children}
        <div className="PostButtons">
            <Link to="/edit-post">Edit</Link>
            <Link to="/delete-post">Delete</Link>
        </div>
    </div>
}

export default Post;