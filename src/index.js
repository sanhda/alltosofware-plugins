const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const router = require('./routes');
const db = require('./config/db')
const app = express();
const port = 3000;

// Conect to DB
db.connect();

// middle ware to get data from post method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files (add path to sys)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../')));

// http logger
app.use(morgan('combined'));

// router
router(app);

// handle bars supporter
// engine.registerHelper('dateFormat', require('handlebars-dateformat'));

// template engines
app.engine('handlebars', engine({
    extname: ".handlebars",
    helpers: require("./public/scripts/helpers.js").helpers,
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
