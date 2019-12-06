const postService = {
    createPost: function(data) {
        return fetch('http://localhost:8888/api/post/createPost', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json());
    }
}

export default postService;