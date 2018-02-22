var mongodb = require("mongodb")
var LinesDAO = {
    createLines : function (data, cbk){
        db.collection("lines").insertOne(data, cbk)
    },
    findAllLines: function (cbk) {
        db.collection("lines").find({}).toArray(cbk);
    },
    deleteLines : function(id, cbk){
        var objID = mongodb.ObjectID(id);
        db.collection("lines").deleteOne({_id : objID}, cbk)
    },
    getLinesbyId : function (id,cbk){
        var objId=mongodb.ObjectID(id);
        db.collection("lines").findOne({_id:objId},cbk)
    },
    updateLines : function (id,data,cbk) {
        var objId = mongodb.ObjectID(id);
        var updateData ={$set:data};
        db.collection("lines").updateOne({_id:objId},updateData,cbk)
    }
}

module.exports = TrainsDAO