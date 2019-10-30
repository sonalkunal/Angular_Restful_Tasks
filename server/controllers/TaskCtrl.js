let mongoose = require("mongoose");
let Task = mongoose.model("Task");

module.exports = {
    index: function(req,res){
        Task.find({}, (err,data) => {
            if(err){
                res.json({message:"Error", error:err});
            } else {
                res.json({ message: "Success", data:data});
            }

        });

    }, 
    find: function(req,res) {
        Task.findOne({ _id: req.params.id}, function(err,data){
            if(err) {
               res.json({message: "Error", error:err});
            
            } else{
                res.json({ task});
            }
        });
    },
    create: function (req,res)  {
       console.log("POST/tasks");
       console.log(req.body);
        var task = new Task ({title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        });
        task.save ((err) => {
            if(err){
                res.json({ message: "Error", error:err});
            } else {
                res.json({ message: "success", data:task });
                console.log("Good");
            }
        });
    },
    update: function(req, res) {
        Task.update({ _id: req.params.id}, {
            title: req.body.title,
            description: req.body.description }, function (err,task) {
                if(err) {
                    res.json({ message: "Error", error:err});
                } else {
                    res.json({ message: "success", data:task });
                }

            });
            
        
    },
    delete: function (req,res) {
        console.log("server",req.params.id);
      Task.remove({ _id: req.params.id }, function (err) {
          if (err) {
            res.json({ message: "Error", error:err});
          } else {
              res.json({ message: "success"});
          }
        });

    },


}

