const userService = {
    register: function (data) {
        return fetch('http://localhost:8888/api/user/register', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json().then(json => res.status === 200 ? json : Promise.reject(json)));
    },
    login: function (data) {
        return fetch('http://localhost:8888/api/user/login', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.text().then(text => res.status === 200 ? text : Promise.reject(text)));
    },
    logout: function () {
        return fetch('http://localhost:8888/api/user/logout', {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text());
    }
}

export default userService;