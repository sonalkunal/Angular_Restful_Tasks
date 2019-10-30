var mongoose = require('mongoose');
var TaskCtrl = require("../controllers/TaskCtrl.js");

module.exports = function(app){
    app.get("/tasks", TaskCtrl.index);
    app.get("/tasks/:id",TaskCtrl.find );
    app.post("/tasks", TaskCtrl.create);
    app.put("/tasks/:id", TaskCtrl.update);
    app.delete("/tasks/:id", TaskCtrl.delete);
}