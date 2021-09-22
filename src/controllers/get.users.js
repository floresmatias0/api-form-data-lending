const { User } = require('../db.js');

module.exports = {
    getUsers: async () => {
        return await User.findAll()
    }
}