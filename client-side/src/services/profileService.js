const profileService = {
    getUserProfile: function() {
        return fetch('http://localhost:8888/api/profile')
            .then(res => res.text());
    }
}

export default profileService;