'use strict'
const bcrypt = require('bcryptjs');

module.exports =  {
    MOCKS: {
        USERS: [
            {id: 1, email: 'adminuser@gmail.com', name: 'Cristian', role: 'ADMIN', password: bcrypt.hashSync('abc421', 10)},
            {id: 2, email: 'childuser@gmail.com', name: 'Child', role: 'SALES', password: bcrypt.hashSync('123456', 10)}
        ]
    },
    AUTH:{
        TOKEN: 'AKI452IQK7PPS9654NO8943Q'
    }
}