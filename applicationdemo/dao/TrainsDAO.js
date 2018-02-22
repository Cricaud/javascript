var mongodb = require("mongodb")
var TrainsDAO = {
    createTrain : function (data, cbk){
        db.collection("train").insertOne(data, cbk)
    },
    findAllTrains: function (cbk) {
        db.collection("train").find({}).toArray(cbk);
    },
    deleteTrain : function(id, cbk){
        var objID = mongodb.ObjectID(id);
        db.collection("train").deleteOne({_id : objID}, cbk)
    },
    getTrainbyId: function (id,cbk){
        var objId=mongodb.ObjectID(id);
        db.collection("train").findOne({_id:objId},cbk)
    },
    updateTrain: function (id,data,cbk) {
        var objId = mongodb.ObjectID(id);
        var updateData ={$set:data};
        db.collection("train").updateOne({_id:objId},updateData,cbk)
    }
}

module.exports = TrainsDAO