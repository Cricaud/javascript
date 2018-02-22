var guard = function (req,res,next) {
    if(!req.session.user && req.originalUrl!= "/login"){
        res.redirect("/login")
    }
    else{
        next()
    }

}
module.exports = guard