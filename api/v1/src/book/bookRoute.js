const router = require('express').router()
const bookController  = require('./bookController')
const {authCheckMiddleware} = require('../middlewares/authentication')

 router.post(
    '/add',authCheckMiddleware, bookController.add
 )

 module.exports = router;