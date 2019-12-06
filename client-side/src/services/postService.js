const postService = {
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
        return fetch ('http://localhost:8888/api/post/createPost', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json);
    },
    deletePost: function(data) {
        return fetch ('http://localhost:8888/api/post/createPost', {
            method: 'POST'
        });
    }
}

export default postService;