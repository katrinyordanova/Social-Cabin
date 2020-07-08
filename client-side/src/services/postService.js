const postService = {
    get: {
        many: function() {
            return fetch ('http://localhost:8888/api/post/all-posts')
            .then(res => res.json());
        },
        myPosts: function(id) {
            return fetch (`http://localhost:8888/api/post/my-posts/${id}`)
            .then(res => res.json());
        },
        one: function(id) {
            return fetch (`http://localhost:8888/api/post/${id}`)
            .then(res => res.text());
        }
    },
    create: function(data) {
        return fetch('http://localhost:8888/api/post/create-post', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.text());
    },
    edit: function(id, data) {
        return fetch (`http://localhost:8888/api/post/edit-post/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json());
    },
    delete: function(id) {
        return fetch (`http://localhost:8888/api/post/delete-post/${id}`, {
            method: 'DELETE'
        }).then(res => res.text());
    },
    like: function(id) {
        return fetch (`http://localhost:8888/api/post/like-post/${id}`, {
            method: 'PUT'
        }).then(res => res.text());
    }
}

export default postService;