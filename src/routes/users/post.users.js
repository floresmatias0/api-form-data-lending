const server = require('express').Router();
const { createUser } = require('../../controllers/post.users')

server.post('/create', (req, res, next) => { 
    const { email,name,mount,quotes } = req.body
    createUser(email,name,mount,quotes)
    .then(user => {
        res.status(201).json(user);
    }) 
    .catch(error => {
        console.log(error)
        res.status(401).json(error.message)
    })
});

module.exports = server;