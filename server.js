let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let path = require("path");

// app.use( bodyParser.urlencoded( {extended: true } ) );
app.use( bodyParser.json() );
app.use( express.static( __dirname + "/public/dist/public" ) );

mongoose.connect("mongodb://localhost/restful_crud", { useNewUrlParser: true });

require("./server/config/mongoose.js");

require("./server/config/routes.js")(app);

app.listen(8888, function(){
    console.log("Listening on port 8888");
})
