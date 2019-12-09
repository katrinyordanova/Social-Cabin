const postService = {
    getPost: function(id) {
        return fetch (`http://localhost:8888/api/post/${id}`).then(res => res.json());
    },
    allPosts: function(id) {
        return fetch ('http://localhost:8888/api/post/all-posts').then(res => res.json());
    },
    createPost: function(data) {
        return fetch('http://localhost:8888/api/post/create-post', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json());
    },
    editPost: function(data) {
        return fetch ('http://localhost:8888/api/post/edit-post', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json);
    },
    deletePost: function(data) {
        return fetch ('http://localhost:8888/api/post/delete-post', {
            method: 'POST'
        });
    }
}

export default postService;