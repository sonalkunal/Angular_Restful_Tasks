
let mongoose = require("mongoose");

let TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false },
}, { timestamps: true } );

let Task = mongoose.model("Task", TaskSchema);