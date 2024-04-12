const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const router = require('./routes');
const app = express();
const port = 3000;


// middle ware to get data from post method
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// static files (add path to sys)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'data')));

// http logger
app.use(morgan('combined'));

// router
router(app)

// template engines
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})