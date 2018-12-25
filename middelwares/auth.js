const jwt = require('jsonwebtoken')
const {AUTH, MOCKS} = require('../constants/constants');

module.exports = async function(req, res, next) {
    if( req.headers && req.headers.authorization ) {
        try {
            const token = jwt.verify(req.headers['authorization'], AUTH.TOKEN)
            const user = MOCKS.USERS.find(user => user.id === token.sub);
            req.user = user;
        }
        catch(err) {
            return res.status(401).json({
                error: {
                    message: 'Authentication failed'
                }
            })
        }
    } else {
        return res.status(401).json({
            error: {
                message: 'No token!'
            }
        })
    }
    next()
    return
}
