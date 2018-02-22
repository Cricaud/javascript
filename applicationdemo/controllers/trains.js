var TrainsDAO = require("../DAO/TrainsDAO");

var TrainsService={
    createTrain : function(data, cbk){
        TrainsDAO.createTrain(data, cbk)
    },
    findAllTrains : function(cbk){
        TrainsDAO.findAllTrains(cbk)
    },
    deleteTrain : function(id, cbk){
        TrainsDAO.deleteTrain(id, cbk)
    },
    getTrainbyId :function(id, cbk){
        TrainsDAO.getTrainbyId(id,cbk)
    },
    updateTrain : function(id, data, cbk){
        TrainsDAO.updateTrain(id,data,cbk)
    }
}
module.exports = TrainsService