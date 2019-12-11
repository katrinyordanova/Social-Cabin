const postService = {
    getOne: function(id) {
        return fetch (`http://localhost:8888/api/post/${id}`).then(res => res.json());
    },
    getAll: function() {
        return fetch ('http://localhost:8888/api/post/all-posts').then(res => res.json());
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
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.text);
    },
    delete: function(id, data) {
        return fetch (`http://localhost:8888/api/post/delete-post/${id}`, {
            method: 'POST'
        });
    }
}

export default postService;