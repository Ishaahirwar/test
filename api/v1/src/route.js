const express = require('express');
const router  = express.router();
const bookRouter = require("./book/bookRoute")


const defaultRouter  = [
    {
        path:'/book',
        route:bookRouter
    }
];

console.log("---------------here")

defaultRouter.forEach((route)=>{
    router.use(route.path , route.route)
})
module.exports = router;