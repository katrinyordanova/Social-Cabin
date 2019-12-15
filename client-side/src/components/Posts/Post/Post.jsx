import React from 'react';
import './Post.css';

function Post({ children }) {
    return <div className="Post" >
        {children}
    </div>
}

export default Post;