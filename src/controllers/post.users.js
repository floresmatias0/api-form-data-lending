const { User } = require('../db.js')

module.exports = {
    createUser: async(email,name,mount,quotes) => {
        return await User.create({
            email,
            name,
            mount,
            quotes
        })
    }
}