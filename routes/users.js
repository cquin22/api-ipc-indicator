'use strict'
const express = require('express');
const router = express.Router();
const {MOCKS, AUTH} = require("../constants/constants");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middelwares/auth');

/* GET users listing. */
router.get('/', auth, async (req, res, next) => {
    try {
        return res.status(200).json({user: req.user})
    }catch (e) {
        return next(e)
    }
});

router.post('/login', async (req, res, next) => {
      try {
          //Todo implements repository with access database
          let user = MOCKS.USERS.find(user => user.email === req.body.email);
          if (user) {
              if(bcrypt.compareSync(req.body.password, user.password)) {
                  //Todo implements sign of token with system environments
                  let token = jwt.sign({ sub: user.id }, AUTH.TOKEN);
                  return res.status(200).json({token: token});
              }
              else {
                  throw Error('PASSWORD_WRONG');
              }
          }else{
              throw Error('AUTHENTICATED_FAIL');
          }
      }catch (err) {
          return next(err)
      }
});

module.exports = router;
