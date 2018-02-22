var express = require("express");
var expressSession = require("express-session");
var http = require("http");
var viewEngine= require("ejs-mate");
var bodyparser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;

var homeController=require("./controllers/home");
var trainController=require("./controllers/train");
var linesController=require("./controllers/lines");
var guard=require("./security/guard");
var mongoUrl = "mongodb://localhost:27017/train_manager"
MongoClient.connect(mongoUrl, function(err, db){
    if (err) throw err
    global.db = db.db('train_manager')
    var expressServer = express();
    expressServer.use(expressSession({secret:"bonjour"}));
    expressServer.set("view engine", 'ejs');
    expressServer.engine('ejs', viewEngine);

    var httpserver = http.createServer(expressServer);
    expressServer.use(guard)
    expressServer.use(bodyparser.urlencoded({extended : true}));
    expressServer.use(homeController);

    expressServer.use(trainController);
    expressServer.use(linesController);

    httpserver.listen(8080);

});