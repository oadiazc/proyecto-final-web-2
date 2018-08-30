var express = require('express'),
    path = require('path');
let app = express();
var bodyParser = require('body-parser');

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, './public')));
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var server = require("./server");
server.iniciar(app);
