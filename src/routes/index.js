const { Router } = require('express');

const getUsers = require('./users/get.users');
const postUsers = require('./users/post.users');

const router = Router();

router.use('/users', getUsers);
router.use('/users', postUsers);

module.exports = router;