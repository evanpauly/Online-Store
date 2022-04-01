const express = require('express');
// const sequelize = require('sequelize');
const exphbs = require("express-handlebars");
// const materialize = require("materialize-css");
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Handlebars as the default templating engine.


// app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});



