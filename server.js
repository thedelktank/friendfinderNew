var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
require('./app/routing/api-routes.js')(app);
require("./app/routing/html-routes.js")(app);
app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
});
