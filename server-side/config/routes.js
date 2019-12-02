const router = require('../routes/')

module.exports = (app) => {
    //user
    app.use('/api/user', router.user);
    //error
    app.get('*', (request, response) => { response.send('<h1>Something went wrong</h1>');});
}