const server = require('express').Router();
        
const { getUsers } = require('../../controllers/get.users')

server.get('/', async(req, res, next) => { 
    getUsers()
    .then(users => {
        res.status(201).json(users);
    }) 
    .catch(error => {
        console.log(error)
        res.status(400).json(error.message)
    })
});

module.exports = server;