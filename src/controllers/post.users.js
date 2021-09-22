const { User } = require('../db.js')

module.exports = {
    createUser: async(nombre,apellido,telefono,monto,cuotas) => {
        return await User.create({
            nombre,
            apellido,
            telefono,
            monto,
            cuotas
        })
    }
}