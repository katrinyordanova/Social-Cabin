const postService = {
    allPosts: function(id) {
        return fetch (`http://localhost:8888/api/post/${id}`).then(res => res.json());
    },
    getPost: function(data) {
        return fetch ('http://localhost:8888/api/post/createPost', {
            
        });
    },
    createPost: function(data) {
        return fetch('http://localhost:8888/api/post/createPost', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json());
    },
    editPost: function(data) {
        return fetch ('http://localhost:8888/api/post/editPost', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json);
    },
    deletePost: function(data) {
        return fetch ('http://localhost:8888/api/post/deletePost', {
            method: 'POST'
        });
    }
}

export default postService;