const server = require('express').Router();
const { createUser } = require('../../controllers/post.users')

server.post('/create', (req, res, next) => { 
    const { nombre,apellido,telefono,monto,cuotas } = req.body
    createUser(nombre,apellido,telefono,monto,cuotas)
    .then(user => {
        res.status(201).json(user);
    }) 
    .catch(error => {
        console.log(error)
        res.status(401).json(error.message)
    })
});

module.exports = server;