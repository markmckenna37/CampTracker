//Dependencies
const express = require("express");



// Sets up the ExpressApp
const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.static("public"));
// requiring models for syncing
const db = require("./models");

// ROUTES
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory

const exphbs = require("express-handlebars");

//Sets up the Express app to handle data parsing
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/campsitecontroller.js");

//Require models for syncing



//Sync sequelize models and start express app
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    });
});