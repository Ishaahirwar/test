const jwt = require('jsonwebtoken') 


exports.authCheckMiddleware = async(req,res,next) =>{
    let url = req.url;
    let token = req.headers['x-access-token']
    const decoded  = jwt.verify(token , "secret")
    req.userData ={ ...decoded};
    next()

}