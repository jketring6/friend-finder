var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

/////////////////////

var app = express();
var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes.js")(app);

////////////////////

app.listen(port, function() {
    console.log("App listening on PORT " + port);
});