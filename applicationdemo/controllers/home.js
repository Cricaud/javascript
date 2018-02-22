var router = require("express").Router();

router.get("/", function(req, res){
    res.render("home", {"name":"Nath "} );
})

router.get("/home", function(req, res){
    res.send("Bonjour vous êtes à l'acceuil!");
})
router.get("/login",function (req,res) {
    res.render("login")
})
router.post("/login",function (req,res) {
    var login = req.body.login
    var password = req.body.password
    if(login == "admin" && password == "admin123"){
        req.session.user ={login : "admin", name:"me"}
        res.redirect("/")
    }
    else {
        res.redirect("/login")
    }


})
module.exports = router