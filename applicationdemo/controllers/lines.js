var LinesDAO = require("../DAO/LinesDAO");

var TrainsService={
    createTrain : function(data, cbk){
        LinesDAO.createLines(data, cbk)
    },
    findAllTrains : function(cbk){
        LinesDAO.findAllLines(cbk)
    },
    deleteTrain : function(id, cbk){
        LinesDAO.deleteLines(id, cbk)
    },
    getTrainbyId :function(id, cbk){
        LinesDAO.getLinesbyId(id,cbk)
    },
    updateTrain : function(id, data, cbk){
        LinesDAO.updateLines(id,data,cbk)
    }
}
module.exports = LinesService