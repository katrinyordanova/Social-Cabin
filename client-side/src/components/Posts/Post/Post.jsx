import React from 'react';
import './Post.scss';

function Post({ children }) {
    return <div className="posts__post">
        {children}
    </div>
}

export default Post;